const input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  const length = e.target.value.length;
  if (length === 0) input.className = "";
  else if (length < 6) input.className = "invalid";
  else input.className = "valid";
});
