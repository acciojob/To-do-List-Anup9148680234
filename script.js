//your code here
const userInput = document.getElementById("newTodoInput");
const btn = document.getElementById("addTodoBtn");
const list = document.getElementById("todoList");

btn.addEventListener("click" , function() {
	const Inputtrimed = userInput.value.trim();
	if(Inputtrimed != ""){
		const li = document.createElement("li");
		li.textContent = Inputtrimed;
		list.appendChild(li);
		userInput.value = "";
	}
})