export default function Todo() {

	let tasks = getTasksLocally();

	const todoAddInput = document.querySelector('.todo__input');
	const todoAddButton = document.querySelector('.todo__input-button');
	const todoTasksContainer = document.querySelector('.todo__tasks');


	if (todoTasksContainer) {
		todoAddButton.addEventListener('click', handleTodoAddButtonClick);
		window.addEventListener('keydown', handleWindowKeyEnter);
	}

	// Inputs new task with the "enter" key.
	function handleWindowKeyEnter(event) {
		if (event.keyCode === 13) {
			addNewTask();
			renderHTML();
		}
	}
	
	function handleTodoAddButtonClick(event) {
		addNewTask();
		renderHTML();
	}

	function handleTaskDeleteButtonClick(event) {
		const task = event.currentTarget.parentElement.parentElement;
		
		deleteTask(task.dataset.index);
		renderHTML();
	}

	function handleTaskDoneButtonClick(event) {
		/**
		 * flaky way of getting the task DOM element, given the current structure:
		 * 
		 * 		.parentElement						<div class="todo__task">
		 * 												task text
		 * 		.parentElement							<div class="todo__buttons">
		 * 		event.currentTarget ->				<button>Delete</button>
		 * 			
		 */
		const task = event.currentTarget.parentElement.parentElement;
		
		markTaskDone(task.dataset.index);
		renderHTML();
	}
	
	// Pushes the value in input field to the todo table.
	// If enter value = '' it alerts the person concerned.
	function addNewTask() {
		const currentInput = todoAddInput.value;
		
		if (currentInput !== '') {
			tasks.push({
				text: currentInput,
				done: false
			});
		} else {
			alert('Please enter a task')
		}

		storeTasksLocally();
	}

	// removes or "splices" task from table and stores changes in local storage.
	function deleteTask(index) {
		tasks.splice(index, 1);

		storeTasksLocally();
	}

	function markTaskDone(index) {
		tasks[index].done = !tasks[index].done;
		
		storeTasksLocally();
	}

	// Converts values (tasks) to string.
	// Puts them in key value pairs in local storage.
	function storeTasksLocally() {
		const key = 'todo-list';
		const value = JSON.stringify(tasks);
		 
		window.localStorage.setItem(key, value);
	}

	/**
	 * 	Returns the parsed array stored locally, otherwise an empty array
	 * 	If nothing has been stored
	 */
	function getTasksLocally() {
		const key = 'todo-list';
		const tasksAsString = window.localStorage.getItem(key);

		if (tasksAsString) {
			return JSON.parse(tasksAsString);
		} else {
			return [];
		}
	}
	/**
	 * Creates table and button elements and puts them in the DOM.
	 * Gives elements a class and "attaches" elements to their respected parent node.
	 * Gives buttons text and conditional statement to the status button (we check if the task is done; True or False).
	 */
	function addTodoElementsToDOM(task, index) {
		const taskElement = document.createElement('tr');
		const taskElementText = document.createElement('td');
		const taskElementDeleteButtonRow = document.createElement('td');
		const taskElementStatusButtonRow = document.createElement('td');
		const taskElementDeleteButton = document.createElement('button');
		const taskElementStatusButton = document.createElement('button');
		

		taskElement.className = 'todo__task';
		taskElement.dataset.index = index;

		taskElementText.innerText = task.text;
		taskElementText.className = 'todo__task-text';

		if (task.done === true) {
			taskElement.classList.add('todo__task--done');
		}

		taskElementDeleteButton.innerText = 'Delete';
		taskElementStatusButton.innerText = task.done === true ? 'Undo!' : 'Done';

		taskElementStatusButtonRow.className = 'table__status-button'
		taskElementDeleteButtonRow.className = 'table__delete-button'

		taskElementDeleteButton.addEventListener('click', handleTaskDeleteButtonClick);
		taskElementStatusButton.addEventListener('click', handleTaskDoneButtonClick);
		
		taskElementStatusButtonRow.appendChild(taskElementStatusButton);
		taskElementDeleteButtonRow.appendChild(taskElementDeleteButton);

		taskElement.appendChild(taskElementText);
		taskElement.appendChild(taskElementStatusButtonRow);
		taskElement.appendChild(taskElementDeleteButtonRow);

		return taskElement;
	}
	
	function renderHTML() {
		todoTasksContainer.innerHTML = '';
		
		tasks.forEach((task, index) => {
			const taskElement = addTodoElementsToDOM(task, index);
			todoTasksContainer.appendChild(taskElement);
		});
	}

	/**
	 * 	render at least once after loading the module for the first time
	 */
	renderHTML();
}

// function addTodoElementsToDOM(task, index) {
// 	const taskElement = document.createElement('tr');
// 	const taskElementText = document.createElement('td');
// 	const taskElementButtons = document.createElement('td');
// 	const taskElementDeleteButton = document.createElement('td');
// 	const taskElementDoneButton = document.createElement('td');