export default function Slideshow() {
	
	let currentSlide = 0;

	const slides = document.querySelectorAll(".slideshow__image");
	const nextSlideButton = document.querySelector(".slideshow__button-next");
	const previousSlideButton = document.querySelector(".slideshow__button-previous");

	if (nextSlideButton !== null) {
		nextSlideButton.addEventListener('click', handleNextSlideButton);
		previousSlideButton.addEventListener('click', handlePreviousSlideButton);
		window.addEventListener('keyup', handleWindowKeyArrows);
	}

	function handleNextSlideButton() {
		increaseCurrentSlideIndex();
	}

	function handlePreviousSlideButton() {
		decreaseCurrentSlideIndex();
	}

	/**
	 * 
	 * I know that you have a "better" way of increasing and decreasing slides.
	 * I wanted to try out a different method using transform insted of slideshow--active.
	 * This is what I came up with.
	 * 
	 */

	/**
	 * 
	 * Set each slides horizontal property (X) to index * 100% by looping through and transforming.
	 * 
	 */
	
	function transformSlides() {
		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${index * 100}%)`;
		});
	}

	function handleWindowKeyArrows(event) {
		if (event.key === "ArrowRight") {
			increaseCurrentSlideIndex();
		}	else if (event.key === "ArrowLeft") {
			decreaseCurrentSlideIndex();
		}
	}

	let maxNumberOfSlides = slides.length - 1; // maximum number of slides

	/**
	 * 
	 * checks if the current slide is the last. Resets current slide
	 * move slide by -100%
	 * 
	 */

	function increaseCurrentSlideIndex() {
		if (currentSlide === maxNumberOfSlides) {
			currentSlide = 0;
  		} else {
			currentSlide++;
  		}
		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
		});
	};

	/**
	 * 
	 * checks if the current slide is the first. Resets current slide to last.
	 * move slide by 100%.
	 * 
	 */

	function decreaseCurrentSlideIndex() {
		if (currentSlide === 0) {
			currentSlide = maxNumberOfSlides;
		} else {
			currentSlide--;
		};
		slides.forEach((slide, index) => {
  	 	slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  		});
	};

	/**
	 * Renders the horizontal value for each slide after the module runs the first time.
	 * Importent to set the correct first slide in the slideshow.
	 */

	transformSlides();
	
}
