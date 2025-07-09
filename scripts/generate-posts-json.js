const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, 'posts');
const outputFile = path.join(__dirname, 'posts.json');

const posts = [];

fs.readdirSync(postsDir).forEach(file => {
  const filePath = path.join(postsDir, file);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContent);

  if (data.title && data.date) {
    posts.push({
      title: data.title,
      date: data.date,
      slug: data.slug || file.replace('.md', ''),
      cover: data.cover || '',
    });
  }
});

fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
console.log('✅ posts.json generated!');
