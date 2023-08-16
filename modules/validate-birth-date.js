import setStatus from './set-status.js';
import validateForm from './validate-form.js';

export default function validateBirthDate(event) {

	const birthDate = event.target;
	const validity = birthDate.validity;
	const errorMessage = document.getElementById('birth-day-error');

	if (validity.valid) {

		setStatus(birthDate, true);
	}

	if (!validity.valid) {

		setStatus(birthDate, false);

		if (validity.valueMissing) errorMessage.textContent = 'Поле обязательно для заполнения';
		if (validity.rangeUnderflow) errorMessage.textContent = 'Введите дату не ранее 01.01.1900';
		if (validity.rangeOverflow) errorMessage.textContent = 'Вам должно быть не менее 18 лет';
	}

	validateForm(birthDate.form);
}