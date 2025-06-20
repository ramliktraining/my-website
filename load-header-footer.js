// ✅ load banner.html into top of the body
// fetch("banner.html")
 //  .then(res => res.text())
//   .then(data => {
//     const banner = document.createElement("div");
 //    banner.innerHTML = data;
//     document.body.insertBefore(banner, document.body.firstChild);
//   });

// document.addEventListener("DOMContentLoaded", () => {
//   const closeBtn = document.getElementById("banner-close");
//   if (closeBtn) {
//     closeBtn.addEventListener("click", () => {
//       document.getElementById("site-banner").style.display = "none";
//     });
//   }
// });

// setTimeout(() => {
//   const banner = document.getElementById("site-banner");
//   if (banner) banner.style.display = "none";
// }, 10000); // 10000ms = 10 seconds

// load-header-footer.js
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
