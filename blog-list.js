// blog-list.js
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const blogList = document.getElementById('blog-list');
    blogList.innerHTML = posts.map(post => `
      <article class="blog-preview">
        <h2><a href="blog-post.html?slug=${post.slug}">${post.title}</a></h2>
        <p>${post.description || ''}</p>
        <p><small>${post.date || ''}</small></p>
        <a href="blog-post.html?slug=${post.slug}" class="cta-button">Read More</a>
      </article>
    `).join('');
  })
  .catch(err => {
    console.error('Error loading blog posts:', err);
    document.getElementById('blog-list').innerHTML = "<p>Failed to load blog posts.</p>";
  });
