document.addEventListener("DOMContentLoaded", function () {
  // Load header
  fetch("header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  // Load footer
  fetch("footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
