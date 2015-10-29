let digit = /^\d*$/;

export function validateDigit(value) {
  return digit.test(value);
}