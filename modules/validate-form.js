import setStatus from './set-status.js';

export default function validateForm(form) {

	let isValid = false;

	for (let input of form.elements) {

		if (input.type === 'submit') break;

		if (input.classList.contains('valid')) {

			isValid = true;

		} else {

			isValid = false;
			break;
		}
	}

	if (isValid) {

		setStatus(form, true);

	} else if (!isValid) {

		setStatus(form, false);
	}
}