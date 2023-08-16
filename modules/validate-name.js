import setStatus from './set-status.js';
import validateForm from './validate-form.js';

export default function validateName(event) {

	const name = event.target;
	const fieldName = name.id === 'first-name' ? 'Имя' : 'Фамилия';
	const validity = name.validity;
	const errorMessage = document.getElementById(`${name.id}-error`);

	if (validity.valid) {

		setStatus(name, true);

		if (name.value.match(/^[\s'.,)-]/) || name.value.match(/[\s'.,(-]$/)) {

			setStatus(name, false);

			errorMessage.textContent = `${fieldName} не может начинаться/заканчиваться символом или пробелом`;
		}

		if (!name.value.match(/[A-Za-zА-Яа-яЁё0-9]+/)) {

			setStatus(name, false);

			errorMessage.textContent = `${fieldName} не может содержать только символы или пробелы`;
		}
	}

	if (!validity.valid) {

		setStatus(name, false);

		if (validity.valueMissing) errorMessage.textContent = 'Поле обязательно для заполнения';
		if (validity.tooLong) errorMessage.textContent = `${fieldName} не может быть длинее 50 символов`;
		if (validity.patternMismatch) errorMessage.textContent = `${fieldName} может содержать только буквы, цифры, пробелы и символы .,-'()`;
	}

	validateForm(name.form);
}