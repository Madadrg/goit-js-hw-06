document.addEventListener("DOMContentLoaded", function () {
  // Find the ul#categories element
  var categoriesList = document.getElementById("categories");

  // Count and display the total number of categories
  var categoriesCount = categoriesList.getElementsByClassName("item").length;
  console.log("Number of categories: " + categoriesCount);

  // Iterate through each li.item element
  var categoryItems = categoriesList.getElementsByClassName("item");
  for (var i = 0; i < categoryItems.length; i++) {
    var categoryItem = categoryItems[i];

    // Find the title (h2) of the category
    var categoryTitle = categoryItem.querySelector("h2").textContent;

    // Find and count the number of items in the category (li elements)
    var categoryElementsCount = categoryItem.querySelectorAll("ul li").length;

    // Display the results in the console
    console.log("Category: " + categoryTitle);
    console.log("Elements: " + categoryElementsCount);
  }
});
