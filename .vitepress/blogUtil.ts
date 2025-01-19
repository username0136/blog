import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const blogDir = path.resolve(__dirname, "../blog");

export interface BlogItem {
  name: string;
  year: string;
  title: string;
}

export async function getSidebarBlog(): Promise<BlogItem[]> {
  const files = await readdir(blogDir);
  const blogItems: BlogItem[] = [];

  await Promise.all(
    files.map(async (file) => {
      if (path.extname(file) === ".md") {
        const filePath = path.join(blogDir, file);
        const content = await readFile(filePath, "utf-8");
        const { data } = matter(content);

        const year = file.split("-")[0];
        blogItems.push({
          name: file.replace(/\.md$/, ""), // Removing the .md extension
          year: year,
          title: data.title || file.replace(/\.md$/, ""), // Use frontmatter title or fallback to file name
        });
      }
    })
  );

  return blogItems.reverse();
}
