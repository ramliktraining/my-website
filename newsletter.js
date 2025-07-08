document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const emailField = document.getElementById("subscriber-email");
  const successMsg = document.getElementById("newsletter-success");

  if (!form || !emailField || !successMsg) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailField.value.trim();

    if (!email) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    fetch("https://script.google.com/macros/s/AKfycbw3QP9lON5bkr82C0KsFZPuxOT4RWKrGriwmRv8sOJsVqX4MEha8JiAERdhUsyemT9zww/exec", {
      
      method: "POST",
      body: new URLSearchParams({ email: email })
    })
      .then(res => res.text())
      .then(data => {
        if (data === "Success") {
          form.reset();
          successMsg.style.display = "block";
          setTimeout(() => {
            successMsg.style.display = "none";
          }, 4000);
        } else {
          alert("❌ Something went wrong. Please try again.");
        }
      })
      .catch(() => {
        alert("❌ Error connecting to server.");
      });
  });
});
