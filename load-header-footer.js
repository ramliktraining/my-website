document.addEventListener("DOMContentLoaded", function () {
  // Load header with error handling
  fetch("header.html")
    .then((res) => {
      if (!res.ok) throw new Error("Header fetch failed");
      return res.text();
    })
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((err) => console.error("Header load error:", err));

  // ✅ Attach scroll event after header is inserted
      window.addEventListener("scroll", function () {
        const scrollBar = document.getElementById("scroll-progress-bar");
        if (!scrollBar) return;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / totalHeight) * 100;
        scrollBar.style.width = scrollProgress + "%";
      });
    });


  // Load footer with error handling
  fetch("footer.html")
    .then((res) => {
      if (!res.ok) throw new Error("Footer fetch failed");
      return res.text();
    })
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch((err) => console.error("Footer load error:", err));
});
