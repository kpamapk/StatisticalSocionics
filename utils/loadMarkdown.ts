import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface MarkdownEntry<T = any> {
  slug: string;
  content: string;
  frontmatter: T;
}

export async function loadMarkdownDir<T = any>(dir: string): Promise<MarkdownEntry<T>[]> {
  const directory = path.resolve(`./src/content/${dir}`);
  const files = await fs.readdir(directory);

  const entries = await Promise.all(
    files
      .filter(file => file.endsWith(".md"))
      .map(async file => {
        const filepath = path.join(directory, file);
        const raw = await fs.readFile(filepath, "utf-8");
        const { data, content } = matter(raw);
        const slug = file.replace(/\.md$/, "");

        return {
          slug,
          frontmatter: data as T,
          content,
        };
      })
  );

  return entries;
}
