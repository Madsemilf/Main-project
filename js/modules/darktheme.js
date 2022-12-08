export default function DarkTheme() {
	
	// let isDarkTheme = false;
	let isDarkTheme = getDarkThemeLocally()
	
	const darkThemeButton = document.querySelector('.header__darktheme-button');

	if (darkThemeButton !== null) {
		darkThemeButton.addEventListener('click', handleDarkThemeClick);
	} 

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

	/**
	 * 
	 * @returns returns empty array if no value is stored in local storage.
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

	/**
	 * 
	 * We must update the page once after loading the module to actually render/pupulate the light theme button.
	 * Web page will be dark theme by default.
	 */
	renderHTML();
}

