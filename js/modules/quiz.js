export default function Quiz() {

	let shuffledQuestions, currentQuestionIndex;
	
	const startButton = document.querySelector('.quiz__start-button');
	const questionContainerElement = document.querySelector('.quiz__container');
	const questionElement = document.querySelector('.quiz__question');
	// const answerButtons = document.querySelector('.quiz__answer-button');

	if (startButton) {
		startButton.addEventListener('click', handleStartButtonClick);
	}

	function handleStartButtonClick() {
		startButton.classList.add('quiz__start-button--visible');
		shuffledQuestions = questions.sort(() => Math.random() - .5 )
		currentQuestionIndex = 0;
		questionContainerElement.classList.remove('quiz__container--visible');
		setNextQuestion()
	}

	function showQuestion(question) {
		questionElement.innerText = question.question;
	}

	function setNextQuestion() {
		showQuestion(shuffledQuestions[currentQuestionIndex])
	}
	
	const questions = [
		{ 
			question: "What is 4 * 4?",
			answers: [
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
