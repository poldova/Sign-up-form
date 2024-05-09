const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const buttons = document.querySelectorAll(".join");
const signup = document.querySelector(".signup");
const login = document.querySelector(".login");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "Create Account") {
      if (password.value !== confirm.value) {
        alert(`⚠️ Password's doesn't match`);
        confirm.value = "";
      }
    }
    if (e.target.textContent === "Log in") {
      signup.classList.add("d-n");
      login.classList.remove("d-n");
    }
    if (e.target.textContent === "Create an account") {
      login.classList.add("d-n");
      signup.classList.remove("d-n");
    }
  });
});