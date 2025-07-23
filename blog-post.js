// blog-post.js
const params = new URLSearchParams(window.location.search);
const slug = params.get('slug');

const container = document.getElementById('post-content');

if (!slug) {
  container.innerHTML = '<p>❌ Post not found.</p>';
} else {
  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.slug === slug);
      if (!post) {
        container.innerHTML = '<p>❌ Post not found.</p>';
        return;
      }

      // Update SEO tags
      document.title = post.title;
      document.getElementById('meta-description').content = post.description;
      document.getElementById('og-title').content = post.title;
      document.getElementById('og-description').content = post.description;
      document.getElementById('og-url').content = window.location.href;
      document.getElementById('og-image').content = post.cover;
      document.getElementById('twitter-title').content = post.title;
      document.getElementById('twitter-description').content = post.description;
      document.getElementById('twitter-image').content = post.cover;

      // Render content
      container.innerHTML = `
        <h1>${post.title}</h1>
        <p><em>${post.date}</em></p>
        ${post.cover ? `<img src="${post.cover}" alt="${post.title}" style="max-width:100%;"/>` : ''}
        <p>${post.description}</p>
      `;
    })
    .catch(() => {
      container.innerHTML = '<p>❌ Failed to load post.</p>';
    });
}
