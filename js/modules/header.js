export default function Header() {
	
	/* data */
	let navigationVisible = false;

	/* 1. query selectors*/ 
	const headerNavigation = document.querySelector('.header__navigation');
	const headerMenuButton = document.querySelector('.header__menu-button');

	/* 2. event listners */
	headerMenuButton.addEventListener('click', handleMenuButtonClick);

	/* 3. event handlers */
	function handleMenuButtonClick(event) {
		toggleNavigation();
		renderHTML();
	}

	/* method */ 
	function toggleNavigation() {
		navigationVisible = !navigationVisible;
	}

	/* render */
	function renderHTML() {
		if (navigationVisible === true) {
			headerNavigation.classList.add('header__navigation--visible');
		}  else {
			headerNavigation.classList.remove('header__navigation--visible');
		}
	}
}

	