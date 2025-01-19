import { readdir } from "node:fs/promises";
import path from "node:path";

const blogDir = path.join(__dirname, "../blog");

export async function getSidebarBlog() {
  return (await readdir(blogDir)).reverse();
}
