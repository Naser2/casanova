import { expression } from '@babel/template';

const ValidationRules = (value, rules, form) => {
  let valid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        // console.log('IS REQUIRED: ', valid);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        console.log('EMAIL: ', valid);
        break;
      case 'minLength':
        valid = valid && validateMinLength(value, rules[rule]);
        console.log('RULE: ', rule, 'VALID: ', valid);
        break;
      case 'maxlength':
        valid = valid && validateMaxLength(value, rules[rule]);
        break;
      case 'confirmPass':
        valid = valid && confirmPass(value, form[rules.confirmPass].value); //returns form[password].value
        console.log(
          'CONFIRM PASS KEY: ',
          form[rules.confirmPass],
          'VALUE OF KEY: ',
          form[rules.confirmPass].value
        );
        break;
      default:
        valid = true;
    }
  }

  return valid;
};

const validateRequired = value => {
  if (value.trim() !== '') {
    return true;
  }
  return false;
};
const validateEmail = email => {
  if (email.trim() !== '') {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLocaleLowerCase());
  }
};

const validateMinLength = (value, minLength) => {
  if (value.length >= minLength) {
    return true;
  }
  return false;
};
const validateMaxLength = (value, maxLength) => {
  if (value.length <= maxLength) {
    return true;
  }
  return false;
};

confirmPass = (value, password) => {
  return value.trim() === password;
};

export default ValidationRules;
