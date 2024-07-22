const form = document.querySelector(".form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

// Show input error
function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  let small = formControl.querySelector("small");
  small.textContent = message;
}

// Show input success
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
}

// EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userName.value === "") {
    showError(userName, "Username is required");
  } else {
    showSuccess(userName);
  }
});
