// const userName = prompt("Add text");

// localStorage.setItem("userName", userName)

// console.log(localStorage);
const todo = document.getElementById("todo");
const todos = document.getElementById("todos");
const addTodo = document.getElementById("addTodo");
const savesTodos = localStorage.getItem("Esen");
const clearButton = document.getElementById("clearButton");
const todosArray = savesTodos === null ? [] : JSON.parse(clearButton);
console.log(todosArray);

const renderTodos = (array) => {
	for (let el of array) {
		const newTodo = document.createElement("div");
		const hr = document.createElement("hr");
		newTodo.innerText = el.name;
		newTodo.id = 1;
		todos.append(newTodo, hr);
	}
}
renderTodos(todosArray);

const handleClearAllTodos = () => {
	todos.
	localStorage.removeItem("Esen");
}

const handleAddTodo = () => {
	todosArray.push({ id: Math.random(), name: todo.value });
	todos.innerText = null;
	todo.value = "";
	/////////////////////////////////////
	const stringUs = JSON.stringify(todosArray);
	localStorage.setItem("Esen", stringUs);
	renderTodos(todosArray)
	/////////////////////////////////////
};
clearButton.onclick = handleClearAllTodos;
addTodo.onclick = handleAddTodo;
