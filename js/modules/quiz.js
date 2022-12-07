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

	function setNextQuestion() {

	}
	
	const questions = [
		{ 
			text: "What is 4 * 4",
			alternatives: [
				{ 
					text: "10",
					correct: false
				},
				{ 
					text: "12",
					correct: false
				},
				{ 
					text: "14",
					correct: false
				},
				{ 
					text: "16",
					correct: true
				}
			]
		}
	];	
}
