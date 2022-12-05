export default function DarkTheme() {
	// data aka. "model"
	let isDarkTheme = false;
	
	// query selectors
	const darkThemeButton = document.querySelector('.header__dark-button');

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
			document.body.classList.add('dark-mode');
		} else {
			darkThemeButton.innerText = 'Dark theme';
			document.body.classList.remove('dark-mode');
		}
	}
}

