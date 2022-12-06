export default function DarkTheme() {
	// data aka. "model"
	let isDarkTheme = false;
	

	const darkThemeButton = document.querySelector('.header__darktheme-button');

	if (darkThemeButton !== null) {
		darkThemeButton.addEventListener('click', handleDarkThemeClick);
	}

	renderHTML();

	/**
	 * TODO: 
	 * 
	 * 
	 */
	function handleDarkThemeClick() {
		toggleDarkTheme();
		renderHTML();
	}

	function toggleDarkTheme() {
		isDarkTheme = !isDarkTheme;
	}

	function renderHTML() {
		if (isDarkTheme) {
			darkThemeButton.innerText = 'Light theme';
			document.body.classList.add('dark-theme');
		} else {
			darkThemeButton.innerText = 'Dark theme';
			document.body.classList.remove('dark-theme');
		}
	}
}

