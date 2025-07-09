const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// Directory where your blog posts (markdown files) are stored
const postsDir = path.join(__dirname, "../posts");

// Output file path
const outputFile = path.join(__dirname, "../posts.json");

const posts = [];

// Read all files in posts directory
fs.readdirSync(postsDir).forEach((file) => {
  if (path.extname(file) === ".md") {
    const fullPath = path.join(postsDir, file);
    const content = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(content);

    // Skip post if title or date is missing
    if (!data.title || !data.date) return;

    // Auto-generate slug from filename (e.g. hello-world.md -> hello-world)
    const slug = file.replace(/\.md$/, "");

    posts.push({
      title: data.title,
      date: data.date,
      slug: slug,
      cover_image: data.cover_image || null,
      description: data.description || null,
    });
  }
});

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write to posts.json
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));

console.log("✅ posts.json generated with", posts.length, "posts.");
