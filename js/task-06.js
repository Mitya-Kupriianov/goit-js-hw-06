const input = document.querySelector("#validation-input");
const dataLength = +input.getAttribute("data-length");

input.addEventListener("blur", (e) => {
  const length = e.target.value.length;
  if (length === 0) input.className = "";
  else if (length === dataLength) input.className = "valid";
  else input.className = "invalid";
});
