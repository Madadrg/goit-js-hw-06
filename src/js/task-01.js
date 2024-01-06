// Get the ul#categories element
var categoriesList = document.getElementById("categories");

// Get all the li.item elements within ul#categories
var categoryItems = categoriesList.getElementsByClassName("item");

console.log("Number of categories:", categoryItems.length);

for (var i = 0; i < categoryItems.length; i++) {
  var categoryItem = categoryItems[i];

  // Get the title of the category (h2 tag)
  var categoryTitle = categoryItem.querySelector("h2").textContent;

  // Get all the li elements within the current category
  var categoryElements = categoryItem.querySelectorAll("ul li");

  console.log("\nCategory:", categoryTitle);
  console.log("Elements:", categoryElements.length);
}
