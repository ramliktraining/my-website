fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const listContainer = document.getElementById('blog-list');
    listContainer.innerHTML = '';

    posts.forEach(post => {
      const article = document.createElement('article');
      article.classList.add('blog-preview');
      article.innerHTML = `
        <h2><a href="blog-post.html?slug=${post.slug}">${post.title}</a></h2>
        <p>${post.description}</p>
        <a href="blog-post.html?slug=${post.slug}" class="cta-button">Read More</a>
      `;
      listContainer.appendChild(article);
    });
  })
  .catch(error => console.error('Error loading posts:', error));
