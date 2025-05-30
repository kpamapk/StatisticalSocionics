import fs from "fs";
import path from "path";
import https from "https";

const subreddit = "TalanovQuestionnaires";
const limit = 100;
const outputFile = path.resolve("src/data/reddit.json");
const imageDir = path.resolve("public/reddit-images");

if (!fs.existsSync(imageDir)) {
  fs.mkdirSync(imageDir, { recursive: true });
}

function downloadImage(url: string, filename: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    https.get(url, response => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on("finish", () => {
          file.close(() => resolve());
        });
      } else {
        file.close();
        fs.unlinkSync(filename); // Delete failed file
        reject(new Error(`Failed to download: ${url}`));
      }
    }).on("error", reject);
  });
}

async function fetchAllPosts() {
  let after = null;
  const allPosts: any[] = [];
  let count = 0;

  while (true) {
    const url = `https://www.reddit.com/r/${subreddit}/new.json?limit=${limit}${after ? `&after=${after}` : ""}`;
    const res = await fetch(url);
    const data = await res.json();
    const posts = data?.data?.children;

    for (const p of posts) {
      const imgUrl = p.data.url_overridden_by_dest;
      if (!imgUrl || !/\.(jpg|jpeg|png|gif|webp)$/i.test(imgUrl)) continue;

      const ext = path.extname(imgUrl).split("?")[0];
      const slug = `post-${count}`;
      const filename = `${slug}${ext}`;
      const localPath = `/reddit-images/${filename}`;
      const fullPath = path.join(imageDir, filename);

      try {
        await downloadImage(imgUrl, fullPath);
        allPosts.push({
          title: p.data.title,
          image: localPath,
          slug: slug, // local slug for routing
        });
        count++;
      } catch (err) {
        console.error("❌ Failed to download:", imgUrl, err);
      }
    }

    after = data.data.after;
    if (!after) break;
  }

  fs.writeFileSync(outputFile, JSON.stringify(allPosts, null, 2));
  console.log(`✅ Saved ${allPosts.length} posts to ${outputFile}`);
}

fetchAllPosts();
