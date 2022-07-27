const controls = document.querySelector("#controls");
const create = controls.querySelector("[data-create]");
const destroy = controls.querySelector("[data-destroy]");
const input = controls.querySelector("input");
const boxes = document.querySelector("#boxes");
const size = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

create.addEventListener("click", () => {
  const value = +input.value;
  if (!value || value <= 0) return;
  const arr = [];

  for (let i = 1; i <= value; i++) {
    const element = document.createElement("div");
    element.style.width = `${size + (i + 1) * 10}px`;
    element.style.height = `${size + (i + 1) * 10}px`;
    element.style.background = getRandomHexColor();
    console.log(element);
    arr.push(element);
  }

  boxes.append(...arr);
});

destroy.addEventListener("click", () => {
  boxes.innerHTML = "";
});
