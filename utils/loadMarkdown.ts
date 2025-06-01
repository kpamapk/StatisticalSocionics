import fs from "fs";
import path from "path";
import { markdown } from "astro:markdown";

export async function loadMarkdownDir(dir: string) {
  const fullPath = path.resolve(dir);
  const files = fs.readdirSync(fullPath);

  const entries = await Promise.all(
    files
      .filter((file) => file.endsWith(".md"))
      .map(async (filename) => {
        const slug = filename.replace(/\.md$/, "");
        const raw = fs.readFileSync(path.join(fullPath, filename), "utf-8");
        const rendered = await markdown(raw);
        return { slug, rendered };
      })
  );

  return entries;
}
