document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // ✅ Attach scroll event after header is inserted
      window.addEventListener("scroll", function () {
        const scrollBar = document.getElementById("scroll-progress-bar");
        if (!scrollBar) return;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / totalHeight) * 100;
        scrollBar.style.width = scrollProgress + "%";
      });
    });

  // Load footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
