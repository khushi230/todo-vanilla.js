let form = document.querySelector("form");
let button = document.getElementById("clear");
let todoList = document.getElementById("todo-list");
let input = document.getElementById("user-todo");
const submitBtn = document.getElementById("submit-btn");

let storedToDoList = localStorage.getItem("todo") || [];
if (storedToDoList?.length) storedToDoList = JSON.parse(storedToDoList);

const todoMaker = (input) => {
  const todo = document.createElement("li");
  todo.textContent = input;
  todoList.appendChild(todo);
};

storedToDoList?.forEach((element) => {
  todoMaker(element);
});

const handleSubmit = (e) => {
  e.preventDefault();
  if (input.value) {
    todoMaker(input.value);
    let todoArray = localStorage.getItem("todo") || [];
    if (todoArray.length) todoArray = JSON.parse(todoArray);
    todoArray.push(input.value);
    localStorage.setItem("todo", JSON.stringify(todoArray));
  }
  input.value = "";
};

const handleClear = () => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  localStorage.removeItem("todo");
};

form.addEventListener("submit", (e) => handleSubmit(e));
button.addEventListener("click", () => handleClear());
submitBtn.addEventListener("click", (e) => handleSubmit(e));
