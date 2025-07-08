<script>
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletter-form");
  const emailInput = document.getElementById("subscriber-email");
  const successMessage = document.getElementById("newsletter-success");

  if (!form || !emailInput) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    if (!email) return;

    // Disable button to avoid double clicks
    const button = form.querySelector("button");
    button.disabled = true;

    fetch("https://script.google.com/macros/s/AKfycbw3QP9lON5bkr82C0KsFZPuxOT4RWKrGriwmRv8sOJsVqX4MEha8JiAERdhUsyemT9zww/exec", {
      method: "POST",
      body: new URLSearchParams({ email: email })
    })
    .then(res => res.text())
    .then(data => {
      if (data === "Success") {
        form.reset();
        successMessage.style.display = "block";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 1000);
      } else {
        alert("❌ Something went wrong.");
      }
    })
    .finally(() => {
      button.disabled = false; // Re-enable button
    });
  });
});
</script>
