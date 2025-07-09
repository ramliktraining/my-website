const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDir = path.join(__dirname, "../posts");
const outputFile = path.join(__dirname, "../posts.json");

const posts = [];

fs.readdirSync(postsDir).forEach((file) => {
  if (file.endsWith(".md")) {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    // Generate slug if not present
    const slug = data.slug || file.replace(/\.md$/, "");

    posts.push({
      title: data.title || "Untitled",
      date: data.date || "",
      slug,
      cover: data.cover || "",
      excerpt: data.excerpt || "",
    });
  }
});

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Save to posts.json
fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log("✅ posts.json generated.");
