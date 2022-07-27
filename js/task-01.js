const ulItem = document.querySelector("#categories");

const liItemsFirst = ulItem.children;
console.log("Number of categories: ", liItemsFirst.length);
console.log(" ");
console.log("Category: ", liItemsFirst[0].querySelector("h2").textContent);
console.log("Elements: ", liItemsFirst[0].querySelectorAll("li").length);
console.log(" ");
console.log("Category: ", liItemsFirst[1].querySelector("h2").textContent);
console.log("Elements: ", liItemsFirst[1].querySelectorAll("li").length);
console.log(" ");
console.log("Category: ", liItemsFirst[2].querySelector("h2").textContent);
console.log("Elements: ", liItemsFirst[2].querySelectorAll("li").length);
