function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

function updateBackgroundColor() {
  const randomColor = getRandomHexColor();

  // Update the body background color
  document.body.style.backgroundColor = randomColor;

  // Display the color value in the span
  colorSpan.textContent = randomColor;
}

// Add click event listener to the button
changeColorButton.addEventListener("click", updateBackgroundColor);
