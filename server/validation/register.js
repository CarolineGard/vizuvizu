const Validator = require("validator");
const isEmpty = require("./is-empty");

// Checks if any errors in input for register page
// Fill array with errors and return to the client side

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";

  // Check the validation for all user inputs
  // If error exists, no further process is needed

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters!";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required!";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email is required!";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required!";
  }

  if (!Validator.isLength(data.password_confirm, { min: 6, max: 30 })) {
    errors.password_confirm =
      "Password confirmation must be between 6 and 30 characters";
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Password confirmation is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
