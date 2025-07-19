const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

const postsDir = path.join(__dirname, 'posts');
const outputDir = path.join(__dirname, 'posts');

if (!fs.existsSync(postsDir)) {
  console.error('No posts directory found!');
  process.exit(1);
}

// Loop through all .md files and convert to HTML
fs.readdirSync(postsDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(postsDir, file);
    const markdown = fs.readFileSync(filePath, 'utf-8');
    const htmlContent = marked(markdown);

    // Wrap in a basic HTML structure
    const htmlPage = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${file.replace('.md', '')}</title>
  <link rel="stylesheet" href="../style.css">
</head>
<body>
  <div class="container">
    ${htmlContent}
  </div>
</body>
</html>`;

    // Save as .html
    const outputFile = path.join(outputDir, file.replace('.md', '.html'));
    fs.writeFileSync(outputFile, htmlPage);
    console.log(`Converted: ${file} -> ${file.replace('.md', '.html')}`);
  }
});

console.log('✅ All Markdown posts converted to HTML!');
