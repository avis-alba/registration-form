import validateForm from './validate-form.js';
import setStatus from './set-status.js';

export default function validatePassword(event) {

	const password = event.target;
	const validity = password.validity;
	const errorMessage = document.getElementById('password-error');

	const passwordConfirm = document.getElementById('password-confirm');
	const passwordConfirmError = document.getElementById('password-confirm-error');

	if (validity.valid) {

		setStatus(password, true);

		let isValid = false;

		const checks = {
			lowercaseLetter: {
				check: password.value.match(/[a-zа-яё]+/),
				message: 'Пароль должен содержать хотя бы одну строчную букву'
			},
			uppercaseLetter: {
				check: password.value.match(/[A-ZА-ЯЁ]+/),
				message: 'Пароль должен содержать хотя бы одну заглавную букву'
			},
			digit: {
				check: password.value.match(/\d+/),
				message: 'Пароль должен содержать хотя бы одну цифру'
			},
			symbol: {
				check: password.value.match(/[`!@#№$%^&*()_=+[\]{}:;"\\|,./<>?~'-]+/),
				message: 'Пароль должен содержать хотя бы один символ'
			}
		};

		for (let checkType in checks) {

			if (checks[checkType].check) {

				isValid = true;

			} else {

				isValid = false;
				errorMessage.textContent = checks[checkType].message;
				break;
			}
		}

		if (isValid) {

			setStatus(password, true);

		} else if (!isValid) {

			setStatus(password, false);
		}
	}

	if (!validity.valid) {

		setStatus(password, false);

		if (validity.valueMissing) errorMessage.textContent = 'Поле обязательно для заполнения';
		if (validity.patternMismatch) errorMessage.innerHTML = 'Пароль может содержать: буквы, цифры, пробелы и символы<br>`!@#№$%^&*()_=+[]{}:;"\\|,.-/<>?~\'';
		if (validity.tooShort) errorMessage.textContent = 'Пароль должен быть не короче 8 символов';
		if (validity.tooLong) errorMessage.textContent = 'Пароль должен быть не длинее 100 символов';
	}

	if (passwordConfirm.value) {

		if (password.value === passwordConfirm.value) {

			setStatus(passwordConfirm, true);

		} else if (password.value !== passwordConfirm.value) {

			setStatus(passwordConfirm, false);

			passwordConfirmError.textContent = 'Пароли не совпадают, повторите ввод';
		}
	}

	validateForm(password.form);
}