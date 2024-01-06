const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Get the ul#ingredients element
const ingredientsList = document.getElementById("ingredients");

// Create a document fragment to improve performance when adding multiple elements
const fragment = document.createDocumentFragment();

// Iterate through the ingredients array
ingredients.forEach((ingredient) => {
  // Create a new li element
  const listItem = document.createElement("li");

  // Add the ingredient name as text content
  listItem.textContent = ingredient;

  // Add the item class to the element
  listItem.classList.add("item");

  // Append the li element to the document fragment
  fragment.appendChild(listItem);
});

// Append all the li elements to the ul#ingredients in one operation
ingredientsList.appendChild(fragment);
