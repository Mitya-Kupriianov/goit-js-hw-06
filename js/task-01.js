const ulItem = document.querySelector("#categories");
const liItemsFirst = ulItem.children;

console.log("Number of categories: ", liItemsFirst.length);

for (let i = 0; i <= liItemsFirst.length - 1; i++) {
  console.log(" ");
  console.log("Category: ", liItemsFirst[i].querySelector("h2").textContent);
  console.log("Elements: ", liItemsFirst[i].querySelectorAll("li").length);
}
