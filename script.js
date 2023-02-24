//your code here
function myFunc() {
	let insertedValue = document.getElementById("newTodoInput").value;
	if(insertedValue != "") {
		let orderedList = document.getElementsByTagName("ol")[0];
		let createList = document.createElement("li");
		createList.textContent = insertedValue;
		orderedList.appendChild(createList);
		document.getElementById("newTodoInput").value = "";
	}
}