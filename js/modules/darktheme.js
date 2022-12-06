export default function DarkTheme() {
	// data aka. "model"
	// let isDarkTheme = false;
	let isDarkTheme = getDarkThemeLocally()
	

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

		storeDarkThemeLocally();
	}

	function storeDarkThemeLocally() {
		const key = 'dark-theme';
		const value = JSON.stringify(isDarkTheme);
		 
		window.localStorage.setItem(key, value);
	}

	/**
	 * 	Returns the parsed array stored locally, otherwise an empty array
	 * 	If nothing has been stored
	 */
	function getDarkThemeLocally() {
		const key = 'dark-theme';
		const darkThemeAsString = window.localStorage.getItem(key);

		if (darkThemeAsString) {
			return JSON.parse(darkThemeAsString);
		} else {
			return [];
		}
	}
}

