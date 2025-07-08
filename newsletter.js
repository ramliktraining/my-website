document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  const email = document.getElementById("subscriber-email");
  const success = document.getElementById("newsletter-success");
  const error = document.getElementById("newsletter-error");

  const scriptURL = "https://script.google.com/macros/s/1wOjeneI6x5kQr9FpSUQMMGE6nCBiDiws0s6r9HcJDU7iTWUtyoYhopsa/exec"; // ✅ Your Google Script

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    if (!emailValue || !emailValue.includes("@")) {
      error.textContent = "Please enter a valid email address.";
      error.style.display = "block";
      return;
    }

    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams({ email: emailValue })
    })
      .then(res => res.text())
      .then(data => {
        if (/success/i.test(data)) {
          success.style.display = "block";
          error.style.display = "none";
          form.reset();
          setTimeout(() => success.style.display = "none", 4000);
        } else {
          throw new Error(data);
        }
      })
      .catch(err => {
        console.error("Newsletter error:", err);
        error.style.display = "block";
        success.style.display = "none";
      });
  });
});
