export default function Todo() {

	const submitTaskButton = document.querySelector('.todo__input-button');
	const submittedTaskInput = document.querySelector('.todo__input');
	const submittedTaskOutput = document.querySelector('#new-task');
	const deleteTaskButton = document.getElementById('#table__delete-button');
	
	if (submitTaskButton !== null) {
		submitTaskButton.addEventListener('click', handleSubmitTaskButton);
		deleteTaskButton.addEventListener('click', handleDeleteTaskButton);
	}
	

	function handleSubmitTaskButton() {
		if (submittedTaskInput.value.length === 0) {
			alert('Please enter a task')
		} else {
			submittedTaskOutput.innerHTML += 
			`
			<tr>
				<td>
				${submittedTaskInput.value}
				</td>
				<td>
				in-progress
				</td>
				<td class="table__button">
					<button>
						<i class="fa-solid fa-pen"></i>
					</button>
				</td>
				<td id="table__delete-button" class="table__button">
					<button>
						<span class="fa fa-trash"></span>
					</button>
				</td>
			</tr>`;
		}
	}

	function handleDeleteTaskButton() {
		this.parentNode.remove();
	}
}

// var current_tasks = document.querySelectorAll(".delete");
//         for(var i=0; i<current_tasks.length; i++){
//             current_tasks[i].onclick = function(){
//                 this.parentNode.remove();