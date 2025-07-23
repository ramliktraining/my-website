// blog-list.js
fetch('posts/index.json')
  .then(res => res.json())
  .then(posts => {
    const listContainer = document.getElementById('blog-list');
    posts.forEach(post => {
      const item = document.createElement('article');
      item.className = 'blog-preview';
      item.innerHTML = `
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p>${post.description}</p>
        <a href="${post.url}" class="cta-button">Read More</a>
      `;
      listContainer.appendChild(item);
    });
  });
