export default function Quiz() {
	
	const startButton = document.querySelector('.quiz__start-button');
	const questionContainerElement = document.querySelector('.quiz__container');

	if (startButton) {
		startButton.addEventListener('click', handleStartButtonClick);
	}
	

	function handleStartButtonClick() {
		startButton.classList.add('quiz__start-button--visible');
		questionContainerElement.classList.remove('quiz__container--visible');
	}
	

	
	
	
	
	
	
	// const questions = [
	// 	{ 
	// 		text: "spørsmålet",
	// 		alternatives: [
	// 			{ 
	// 				text: "A",
	// 				correct: false
	// 			},
	// 			{ 
	// 				text: "B",
	// 				correct: true
	// 			},
	// 			{ 
	// 				text: "C",
	// 				correct: false
	// 			}
	// 		]
	// 	}
	// ];	
}
