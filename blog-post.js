// blog-post.js
function getSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

const slug = getSlug();
if (!slug) {
  document.getElementById('post-content').innerHTML = "<p>Post not found.</p>";
} else {
  fetch(`posts/${slug}.md`)
    .then(res => {
      if (!res.ok) throw new Error('Post not found');
      return res.text();
    })
    .then(markdown => {
      // Convert markdown to HTML (basic)
      const content = markdown
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
        .replace(/\*(.*)\*/gim, '<i>$1</i>')
        .replace(/\n$/gim, '<br />');

      document.getElementById('post-content').innerHTML = content;
      document.title = slug.replace(/-/g, ' ') + " - Ramlik's Blog";
    })
    .catch(err => {
      document.getElementById('post-content').innerHTML = "<p>Post not found.</p>";
      console.error(err);
    });
}
