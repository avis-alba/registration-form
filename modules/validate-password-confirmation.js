import setStatus from './set-status.js';
import validateForm from './validate-form.js';

export default function validatePasswordConfirmation(event) {

	const passwordConfirm = event.target;
	const validity = passwordConfirm.validity;
	const errorMessage = document.getElementById('password-confirm-error');

	const password = document.getElementById('password');

	if (validity.valid) {

		setStatus(passwordConfirm, true);

		if (passwordConfirm.value !== password.value) {

			setStatus(passwordConfirm, false);

			errorMessage.textContent = 'Пароли не совпадают, повторите ввод';
		}
	}

	if (!validity.valid) {

		setStatus(passwordConfirm, false);

		if (validity.valueMissing) errorMessage.textContent = 'Поле обязательно для заполнения';
	}

	validateForm(passwordConfirm.form);
}