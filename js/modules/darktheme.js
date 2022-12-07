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

	function storeDarkThemeLocally() {
		const key = 'dark-theme';
		const value = JSON.stringify(isDarkTheme);
		 
		window.localStorage.setItem(key, value);
	}

	function getDarkThemeLocally() {
		const key = 'dark-theme';
		const darkThemeAsString = window.localStorage.getItem(key);

		if (darkThemeAsString) {
			return JSON.parse(darkThemeAsString);
		} else {
			return [];
		}
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
}

