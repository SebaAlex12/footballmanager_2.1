const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email jest wymagany";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Hasło musi mieć przynajmniej 6 znaków";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Hasło jest wymagane";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
