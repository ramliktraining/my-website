document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");

  fetch("https://ramliktraining.github.io/my-website/blog/posts.json")
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.slug === slug);
      if (!post) return;

      // ✅ Update SEO meta tags
      document.title = post.title;
      document.getElementById("dynamic-title").textContent = post.title;

      document.getElementById("meta-description").setAttribute("content", post.description);
      document.getElementById("og-title").setAttribute("content", post.title);
      document.getElementById("og-description").setAttribute("content", post.description);
      document.getElementById("og-url").setAttribute("content", window.location.href);
      document.getElementById("og-image").setAttribute("content", post.coverImage || defaultCover);

      document.getElementById("twitter-title").setAttribute("content", post.title);
      document.getElementById("twitter-description").setAttribute("content", post.description);
      document.getElementById("twitter-image").setAttribute("content", post.coverImage || defaultCover);

      // ✅ Render content
      document.querySelector(".blog-title").textContent = post.title;
      document.querySelector(".blog-date").textContent = post.date;
      document.querySelector(".blog-body").innerHTML = marked.parse(post.body);
    });
});
