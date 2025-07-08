document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  if (!form) return; // ✅ prevent error if form doesn't exist

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("subscriber-email").value;

    fetch("https://script.google.com/macros/s/AKfycbw3QP9lON5bkr82C0KsFZPuxOT4RWKrGriwmRv8sOJsVqX4MEha8JiAERdhUsyemT9zww/exec", { // ✅ Your Google Script
      method: "POST",
      body: new URLSearchParams({ email: email })
    })
      .then(res => res.text())
      .then(data => {
        if (data === "Success") {
          form.reset();
          const success = document.getElementById("newsletter-success");
          success.style.display = "block";
          setTimeout(() => { success.style.display = "none"; }, 4000);
        } else {
          alert("❌ Something went wrong. Please try again.");
        }
      });
  });
});

