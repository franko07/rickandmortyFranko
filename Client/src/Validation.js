const regexMail = /^[A-Z0-9._%+-]{1,35}@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPass = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{5,9})\S$/;

export default function Validation(inputs) {
  const errors = {};
  if (!regexMail.test(inputs.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!inputs.email) {
    errors.email = "This field is required";
  }

  if (!inputs.password) {
    errors.password = "This field is required";
  }
  if (!regexPass.test(inputs.password)) {
    errors.password = "Please enter a valid password";
  }

  return errors;
}
