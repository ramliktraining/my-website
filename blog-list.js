// blog-list.js
fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const list = document.getElementById('blog-list');
    if (!posts.length) {
      list.innerHTML = '<p>No blog posts yet. Check back soon!</p>';
      return;
    }

    list.innerHTML = posts.map(post => `
      <article class="blog-preview" data-aos="fade-up">
        <h2><a href="blog-post.html?slug=${post.slug}">${post.title}</a></h2>
        <p>${post.description}</p>
        <p><em>${post.date}</em></p>
        <a href="blog-post.html?slug=${post.slug}" class="cta-button">Read More</a>
      </article>
    `).join('');
  })
  .catch(() => {
    document.getElementById('blog-list').innerHTML = '<p>Error loading blog posts.</p>';
  });
