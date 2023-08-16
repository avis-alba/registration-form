export default function setStatus(element, isValid) {

	switch (element.tagName) {

		case 'INPUT':

			const label = document.getElementById(`${element.id}-label`);
			const errorMessage = document.getElementById(`${element.id}-error`);

			if (isValid) {

				element.classList.remove('invalid');
				element.classList.add('valid');
				label.classList.remove('invalid');
				label.classList.add('valid');
				errorMessage.hidden = true;

			} else if (!isValid) {

				element.classList.remove('valid');
				element.classList.add('invalid');
				label.classList.remove('valid');
				label.classList.add('invalid');
				errorMessage.hidden = false;
			}

			break;

		case 'FORM':

			const submitButton = element.submit;

			if (isValid) {

				element.classList.remove('invalid');
				element.classList.add('valid');
				submitButton.disabled = false;

			} else if (!isValid) {

				element.classList.remove('valid');
				element.classList.add('invalid');
				submitButton.disabled = true;
			}

			break;
	}
}