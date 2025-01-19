import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import removeMd from "remove-markdown";

(async () => {
  try {
    const blogDir = path.resolve(__dirname, "../blog");
    console.log("Blog directory:", blogDir);

    const blogs = await fs.readdir(blogDir);

    const data = await Promise.all(
      blogs.map(async (blog) => {
        const filePath = path.join(blogDir, blog);
        const fileContents = await fs.readFile(filePath, "utf-8");
        const file = matter(fileContents);
        const { data, content } = file;
        const contents = removeMd(content)
          .trim()
          .split(/\r\n|\n|\r/);

        return {
          ...data,
          title: contents[0].replace(/\s{2,}/g, "").trim(),
          path: `blog/${blog.replace(/\.md$/, ".html")}`,
        };
      })
    );

    await fs.writeFile("./data.json", JSON.stringify(data), "utf-8");
  } catch (error) {
    console.error("Error processing blogs:", error);
  }
})();
