// Get references to DOM elements
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Add input event listener to the name input
nameInput.addEventListener("input", () => {
  // Get the current value of the input
  const inputValue = nameInput.value.trim();

  // Update the name output with the input value or 'Anonymous' if empty
  nameOutput.textContent = inputValue || "Anonymous";
});
