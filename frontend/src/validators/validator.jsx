import rules from "./rules";
import regex from "./regexs";

const validator = (value, validations) => {
  // console.log(rules);
  // console.log('validator =>',value, validations);

  let validationResults = [];

  for (const validator of validations) {
    if (validator.value == rules.requiredValue) {
      value.trim().length == 0 && validationResults.push(false);
    }
    if (validator.value == rules.minValue) {
      value.trim().length < validator.min && validationResults.push(false);
    }
    if (validator.value == rules.maxValue) {
      value.trim().length > validator.max && validationResults.push(false);
    }
    if (validator.value == rules.emailValue) {
      !regex.testEmil(value) && validationResults.push(false);
    }
  }

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
