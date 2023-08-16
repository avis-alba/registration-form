export default function changeActiveInput(event) {

	if (event.key !== 'Enter') return;
	event.preventDefault();

	const inputs = Array.from(document.querySelectorAll('input'));
	const index = inputs.indexOf(event.target);

	event.target.blur();
	inputs[index + 1].focus();
}