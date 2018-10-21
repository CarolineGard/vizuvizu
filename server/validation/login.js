const Validator = require("validator");
const isEmpty = require("./is-empty");

// Checks if any errors in input for login page
// Fill array with errors and return to the client side

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid!";
  }

  if (Validator.isEmpty(data.email)) {
    errors.name = "Email field is required!";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters!";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password is required!";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
