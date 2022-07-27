const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulItem = document.querySelector("#ingredients");

// const allPusher = ingredients.forEach((ingredient) => {
//   const createLi = document.createElement("li");
//   createLi.className = "item";
//   const text = document.createTextNode(ingredient);
//   createLi.appendChild(text);
//   ulItem.append(createLi);
// });

// const allPusher = ingredients.map((ingredient) => {
//   const createLi = document.createElement("li");
//   createLi.className = "item";
//   const text = document.createTextNode(ingredient);
//   createLi.appendChild(text);
//   return createLi;
// });
// ulItem.append(...allPusher);

const allPusher = ingredients.map((ingredient) => {
  const createLi = document.createElement("li");
  createLi.className = "item";
  createLi.textContent = ingredient;
  return createLi;
});
ulItem.append(...allPusher);
