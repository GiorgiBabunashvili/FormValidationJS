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

//Email validation
function checkEmail(input) {
  let re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (re.test(String(input.value).toLowerCase())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//Get field name
function getFieldName(input) {
  if (input.id === "password2") return "Confirm Password";
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Check required
function checkRequired(inpArr) {
  inpArr.forEach((el) => {
    let input = el;
    if (input.value.trim() === "") {
      showError(input, getFieldName(input) + " is required");
    } else {
      showSuccess(input);
    }
  });
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      getFieldName(input) + " must be at less " + min + " characters"
    );
  } else if (input.value.length > max) {
    showError(
      input,
      getFieldName(input) + " must be at less than " + max + " characters"
    );
  } else {
    showSuccess(input);
  }
}

//Check password
function checkPassword(password1, password2) {
  if (password1.value !== password2.value) {
    showError(password2, "Passwords do not match");
  }
}

// EVENT LISTENERS
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired([userName, email, password, confirmPassword]);
  checkLength(userName, 3, 15);
  checkLength(password, 8, 25);
  checkEmail(email);
  checkPassword(password, confirmPassword);
});
