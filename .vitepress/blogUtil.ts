import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface BlogItemProps {
  name: string;
  year: string;
  title: string;
}

export function getSidebarBlog(): BlogItemProps[] {
  const blogDir = path.resolve(__dirname, "../blog");
  const files = fs.readdirSync(blogDir, { withFileTypes: true });
  const blogItems: BlogItemProps[] = [];

  for (const file of files) {
    if (file.name.endsWith(".md")) {
      const filePath = path.join(blogDir, file.name);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);

      blogItems.push({
        name: file.name.replace(/\.md$/, ""),
        year: file.name.split("-")[0],
        title: data.title,
      });
    }
  }

  return blogItems.reverse();
}
