export default function Slideshow() {
	const slides = document.querySelectorAll(".slideshow__image");
	const nextSlide = document.querySelector(".slideshow__button-next");
	const previousSlide = document.querySelector(".slideshow__button-previous");

	let currentSlide = 0;
	let maxSlide = slides.length - 1; // maximum number of slides

	nextSlide.addEventListener('click', handleNextSlide);
	previousSlide.addEventListener('click', handlePreviousSlide);

	// set each slides horizontal property (X) to index * 100% by looping through
	slides.forEach((slide, index) => {
		slide.style.transform = `translateX(${index * 100}%)`;
	});


	nextSlide.addEventListener('click', function () {
		slides.forEach((slide, index) => {
   		slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  		});
	});

	// checks if the current slide is the last. Resets current slide
	// move slide by -100%
	function handleNextSlide() {
		if (currentSlide === maxSlide) {
			currentSlide = 0;
  		} else {
			currentSlide++;
  		}
		slides.forEach((slide, index) => {
			slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
		});
	};

	// checks if the current slide is the first. Resets current slide to last
	// move slide by 100%
	function handlePreviousSlide() {
		if (currentSlide === 0) {
			currentSlide = maxSlide;
		} else {
			currentSlide--;
		};
		slides.forEach((slide, index) => {
  	 	slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
  		});
	};
}
