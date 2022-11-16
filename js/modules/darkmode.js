export default function Darkmode() {
	
	const darkModeButton = document.querySelector('.header__dark-button');
	darkModeButton.addEventListener('click', handleDarkModeClick);

	function handleDarkModeClick() {
		document.body.classList.toggle('dark-mode');
	}
}

