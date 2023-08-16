import setFieldLimits from './modules/set-field-limits.js';
import validateName from './modules/validate-name.js';
import validateEmail from './modules/validate-email.js';
import validateBirthDate from './modules/validate-birth-date.js';
import validatePassword from './modules/validate-password.js';
import validatePasswordConfirmation from './modules/validate-password-confirmation.js';
import changeActiveInput from './modules/change-active-input.js';

const registrationForm = document.getElementById('registration-form');
const [firstName, lastName, email, birthDay, password, passwordConfirm] = registrationForm.elements;

setFieldLimits(registrationForm);

firstName.addEventListener('blur', validateName);
lastName.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
birthDay.addEventListener('blur', validateBirthDate);
password.addEventListener('blur', validatePassword);
passwordConfirm.addEventListener('blur', validatePasswordConfirmation);

for (let input of registrationForm.elements) {

	if (input.type === 'submit') break;

	input.addEventListener('keydown', changeActiveInput);
}

registrationForm.onsubmit = function (event) {

	event.preventDefault();
	alert('Форма успешно отправлена');
	location.reload();
}