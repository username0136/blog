import path from "path";
import fs from "fs";
import removeMd from "remove-markdown";
import matter from "gray-matter";

const blogDir = path.resolve(__dirname, "../blog");
const blogs = fs.readdirSync(blogDir);

const blogData = blogs
  .map((blog) => {
    const filePath = path.join(blogDir, blog);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);
    const title = removeMd(content)
      .trim()
      .split(/\r\n|\n|\r/)[0];

    // Separate out dates from the file name
    const dateParts = blog.split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    const date = new Date(`${year}-${month}-${day}`);

    return {
      ...data,
      title,
      date,
      path: `blog/${blog.replace(/\.md$/, "")}`,
    };
  })
  .filter((blog) => blog.date)
  .sort((a, b) => b.date!.getDate() - a.date!.getDate());

Bun.write("./data.json", JSON.stringify(blogData, null, 2));
