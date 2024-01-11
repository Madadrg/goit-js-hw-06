// Get references to DOM elements
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");

// Declare a variable to store the counter's current value
let counterValue = 0;

// Add click event handlers to the buttons
decrementButton.addEventListener("click", () => {
  // Decrement the counter value
  counterValue--;

  // Update the interface with the new value
  counterValueSpan.textContent = counterValue;
});

incrementButton.addEventListener("click", () => {
  // Increment the counter value
  counterValue++;

  // Update the interface with the new value
  counterValueSpan.textContent = counterValue;
});
