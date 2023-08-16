import setStatus from './set-status.js';
import validateForm from './validate-form.js';

export default function validateEmail(event) {

	const email = event.target;
	const validity = email.validity;
	const errorMessage = document.getElementById('email-error');

	if (validity.valid) {

		setStatus(email, true);
	}

	if (!validity.valid) {

		setStatus(email, false);

		if (validity.valueMissing) errorMessage.textContent = 'Поле обязательно для заполнения';
		if (validity.typeMismatch || validity.patternMismatch) errorMessage.textContent = 'Введите email в формате mailbox@example.com';
	}

	validateForm(email.form);
}