import path from "path";
import fs from "fs";
import removeMd from "remove-markdown";
import matter from "gray-matter";

const blogDir = path.resolve(__dirname, "../blog");
const blogs = fs.readdirSync(blogDir);

const blogData = blogs.map((blog) => {
  const filePath = path.join(blogDir, blog);
  const fileContents = fs.readFileSync(filePath, "utf-8");
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

Bun.write("./data.json", JSON.stringify(blogData, null, 2));
