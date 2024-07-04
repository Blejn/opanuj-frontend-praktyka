function moreThanZero(validateNumber) {
  return validateNumber > 0;
}

function lessThanHundred(validateNumber) {
  return validateNumber < 100;
}

function isEven(validateNumber) {
  return validateNumber % 2 === 0;
}

const validations = [moreThanZero, lessThanHundred, isEven];

export function validate(value) {
  const number = Number(value);
  if (!Number.isInteger(number)) {
    return false;
  }
  return validations.every((validation) => validation(number));
}
