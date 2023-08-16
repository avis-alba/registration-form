export default function setFieldLimits(form) {

	const [firstName, lastName, email, birthDay, password] = form.elements;

	firstName.minLength = lastName.minLength = '1';
	firstName.maxLength = lastName.maxLength = '50';

	firstName.pattern = lastName.pattern = '^[A-Za-zА-Яа-яЁё0-9.,\\(\\)\\s\'\\-]+$';

	email.pattern = '^.+@.+\\..+$';

	password.minLength = '8';
	password.maxLength = '100';
	password.pattern = '^[A-Za-zА-Яа-яЁё0-9\\s`!@#№$%^&*\\(\\)_=+\\[\\]\\{\\}:;"\\\|,.\\/<>?~\'\\-]+$';

	const currentDate = new Date();
	let year = currentDate.getFullYear() - 18;
	let month = currentDate.getMonth() + 1;
	let day = currentDate.getDate();

	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;

	birthDay.max = `${year}-${month}-${day}`;
	birthDay.min = '1900-01-01';
}

