document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const matrikelnummerInput = document.getElementById("matrikelnummer");
  const emailInput = document.getElementById("email");

  submitButton.addEventListener("click", function (event) {
    const matrikelnummer = matrikelnummerInput.value.trim();
    const email = emailInput.value.trim();
    const isValidMatrikelnummer = validateMatrikelnummer(matrikelnummer);
    const isValidEmail = validateEmail(email);

    if (!isValidMatrikelnummer) {
      event.preventDefault();
      alert("Die Matrikelnummer muss 7-stellig sein.");
    }

    if (!isValidEmail) {
      event.preventDefault();
      alert("Die Email muss mit einem 's-'.");
    }
  });

  function validateMatrikelnummer(matrikelnummer) {
    return matrikelnummer.length === 7 && !isNaN(matrikelnummer);
  }

  function validateEmail(email) {
    return email.startsWith("s-");
  }
});
