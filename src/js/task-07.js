// Get references to DOM elements
const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

// Add input event listener to the range input
fontSizeControl.addEventListener("input", () => {
  // Update the font size of the text element based on the range input value
  textElement.style.fontSize = `${fontSizeControl.value}px`;
});
