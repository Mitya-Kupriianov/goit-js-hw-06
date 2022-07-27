const counter = document.querySelector("#counter");

const firstBtn = counter.firstElementChild;

const secondBtn = counter.lastElementChild;

const value = document.querySelector("#value");
console.log(value);

let counterValue = +value.textContent;

const decrement = firstBtn.addEventListener("click", () => {
  if (counterValue === 0) return;
  counterValue -= 1;
  value.textContent = counterValue;
});

const increment = secondBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = +counterValue;
});
