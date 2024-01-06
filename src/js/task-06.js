// Get the input element
const validationInput = document.getElementById("validation-input");

// Add a blur event listener to the input
validationInput.addEventListener("blur", () => {
  // Get the specified length from the data-length attribute
  const requiredLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );

  // Check the length of the entered text
  const enteredLength = validationInput.value.length;

  // Remove any existing classes
  validationInput.classList.remove("valid", "invalid");

  // Add valid or invalid class based on the length
  if (enteredLength === requiredLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});
