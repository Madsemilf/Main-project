export default function Todo() {

	let tasks = getTasksLocally();

	const todoAddInput = document.querySelector('.todo__input');
	const todoAddButton = document.querySelector('.todo__input-button');
	const todoTasksContainer = document.querySelector('.todo__tasks');


	if (todoTasksContainer) {
		todoAddButton.addEventListener('click', handleTodoAddButtonClick);
		document.addEventListener('keydown', handleTodoAddButtonEvent);
	}

	function handleTodoAddButtonEvent(event) {
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

	function deleteTask(index) {
		tasks.splice(index, 1);

		storeTasksLocally();
	}

	function markTaskDone(index) {
		tasks[index].done = !tasks[index].done;
		
		storeTasksLocally();
	}

	function storeTasksLocally() {
		const key = 'todo-list';
		const value = JSON.stringify(tasks);
		 
		window.localStorage.setItem(key, value);
	}

	/**
	 * 	returns the parsed array stored locally, otherwise an empty array
	 * 	if nothing has been stored
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

		taskElementStatusButtonRow.className = 'table__edit-button'
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