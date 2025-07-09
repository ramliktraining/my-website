const query = new URLSearchParams(window.location.search);
const slug = query.get('slug');

if (slug) {
  fetch(`posts/${slug}.json`)
    .then(res => res.json())
    .then(post => {
      const container = document.getElementById('post-content');
      container.innerHTML = `
        <h1>${post.title}</h1>
        <p class="meta">By ${post.author || 'Ramlik'} • ${post.date}</p>
        <section>${post.content}</section>
      `;
    })
    .catch(() => {
      document.getElementById('post-content').innerHTML = "<p>Post not found.</p>";
    });
}
