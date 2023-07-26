// notes :
// when I learn RegEx in future, I've to develope email validation...

// variables
const $ = document;
const submitBtn = $.querySelector(".submit-btn");

// first name input variables
const firstNameInput = $.querySelector(".first-name-input");
const errIconFirstName = $.getElementById("err-icon-first-name");
const errMsgFirstName = $.getElementById("err-message-first-name");

// last name input variables
const lastNameInput = $.querySelector(".last-name-input");
const errIconLastName = $.getElementById("err-icon-last-name");
const errMsgLastName = $.getElementById("err-message-last-name");

// email input variables
const emailInput = $.querySelector(".email-input");
const errIconEmail = $.getElementById("err-icon-email");
const emptyErrMsgEmail = $.getElementById("empty-err-message-email");

// password input variables
const passwordInput = $.querySelector(".password-input");
const errIconPassword = $.getElementById("err-icon-password");
const errMsgPassword = $.getElementById("err-message-password");

// functions

// this function check validation of inputs when the green submit btn get clicked
function submitBtnHandler(event) {
  event.preventDefault();
  // visible errIcon and errMsg if the first name input is empty
  if (firstNameInput.value === "") {
    errIconFirstName.style.visibility = "visible";
    errMsgFirstName.style.visibility = "visible";
  }
  // hide errIcon and errMsg if the first name input get value and submit after error
  else {
    errIconFirstName.style.visibility = "hidden";
    errMsgFirstName.style.visibility = "hidden";
  }
  // visible errIcon and errMsg if the last name input is empty
  if (lastNameInput.value === "") {
      errIconLastName.style.visibility = "visible";
      errMsgLastName.style.visibility = "visible";
    }
    // hide errIcon and errMsg if the last name input get value and submit after error
    else {
      errIconLastName.style.visibility = "hidden";
      errMsgLastName.style.visibility = "hidden";
    }
    // visible errIcon and errMsg if the email input is empty
    if (emailInput.value === "") {
        errIconEmail.style.visibility = "visible";
        emptyErrMsgEmail.style.visibility = "visible";
    }
    // hide errIcon and errMsg if the email input get value and submit after error
    else {
      errIconEmail.style.visibility = "hidden";
      emptyErrMsgEmail.style.visibility = "hidden";
    }
    if (passwordInput.value === "") {
        errIconPassword.style.visibility = "visible";
        errMsgPassword.style.visibility = "visible";
    }
    // hide errIcon and errMsg if the password input get value and submit after error
    else {
      errIconPassword.style.visibility = "hidden";
      errMsgPassword.style.visibility = "hidden";
    }
}

// lets code

submitBtn.addEventListener("click", submitBtnHandler);
