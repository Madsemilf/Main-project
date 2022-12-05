export default function Header() {
	
	/* data */
	let navigationVisible = false;

	/* 1. query selectors*/ 
	const headerNavigation = document.querySelector('.header__navigation-menu');
	const headerMenuButton = document.querySelector('.header__menu-button');

	/* 2. event listners */
	if (Header !== null) {
		headerMenuButton.addEventListener('click', handleMenuButtonClick);
	}
	

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
			headerNavigation.classList.add('header__navigation-menu--visible');
		}  else {
			headerNavigation.classList.remove('header__navigation-menu--visible');
		}
	}
}

	