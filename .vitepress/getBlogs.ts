import { resolve, join } from "path";
import matter from "gray-matter";
import removeMd from "remove-markdown";
import fs from "fs/promises";

try {
  const blogDir = resolve(__dirname, "../blog");

  fs.readdir(blogDir)
    .then((blogs) => {
      const dataPromises = blogs.map((blog) => {
        const filePath = join(blogDir, blog);
        return fs.readFile(filePath, "utf-8").then((fileContents) => {
          const { data, content } = matter(fileContents);
          const title = removeMd(content)
            .trim()
            .split(/\r\n|\n|\r/)[0];
          return {
            ...data,
            title,
            path: `blog/${blog.replace(/\.md$/, "")}`,
          };
        });
      });

      return Promise.all(dataPromises);
    })
    .then((data) => {
      return Bun.write("./data.json", JSON.stringify(data));
    })
    .catch((error) => {
      console.error("Error processing blogs:", error);
    });
} catch (error) {
  console.error("Error in top-level try block:", error);
}
