const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  e.currentTarget.reset();
});
