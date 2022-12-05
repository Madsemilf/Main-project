export default function Quizdos() {

	let shuffledQuestions, currentQuestionIndex

	const startButton = document.getElementById('start-btn')
	const nextButton = document.getElementById('next-btn')
	const questionContainerElement = document.getElementById('question-container')
	const questionElement = document.getElementById('question')
	const answerButtonsElement = document.getElementById('answer-buttons')

	if (startButton !== null) {
		startButton.addEventListener('click', startGame);
	}
	

	nextButton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextQuestion()
	})

	function startGame() {
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionIndex = 0
	questionContainerElement.classList.remove('hide')
	setNextQuestion()
	}

	function setNextQuestion() {
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
	}

	function showQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('btn')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonsElement.appendChild(button)
	})
	}

	function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild)
	}
	}

	function selectAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(answerButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove('hide')
	} else {
		startButton.innerText = 'Restart'
		startButton.classList.remove('hide')
	}
	}

	function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')
	}
	}

	function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
	}

	const questions = [
	{
		question: 'Hvilken karakter gir du meg?',
		answers: [
			{ text: 'A', correct: true },
			{ text: 'F', correct: false }
		]
	},
	{
		question: 'Hva står CSS for?',
		answers: [
			{ text: 'cas cas sas', correct: true },
			{ text: 'cas sas sas', correct: true },
			{ text: 'cascading style sheets', correct: true },
			{ text: 'cas style sheet', correct: true }
		]
	},
	{
		question: 'Hva er dine tanker rundt det nye god of war spillet?',
		answers: [
			{ text: 'Meh.', correct: false },
			{ text: 'YES!!!', correct: true },
			{ text: 'Nei takk', correct: false },
			{ text: 'My lover', correct: false }
		]
	},
	{
		question: 'Litt enkel matte. Regn ut 2 + 2 * 2',
		answers: [
			{ text: '8', correct: false },
			{ text: '6', correct: true }
		]
	}
	]

}

