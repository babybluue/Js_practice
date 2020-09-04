const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", function (event) {
  if (
    todoInput.value == null ||
    todoInput.value == undefined ||
    todoInput.value == ""
  ) {
    console.log("empty");
    event.preventDefault();
  } else {
    console.log("not empty");
    addTodo(event);
  }
});
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
// completedButton.addEventListener('click',)

function addTodo(event) {
  //prevent from submitting no refresh
  event.preventDefault();
  //todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // todoDiv.setAttribute('class','todo')
  console.log(todoDiv.getAttribute("class"));
  //ceate LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //add todo to localstorage
  saveLocalTodos(todoInput.value);

  //check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fa fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //check trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fa fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //append to list
  todoList.appendChild(todoDiv);
  //clear todoinput vlaue
  todoInput.value = "";
  //create the element and attaching the listener
}
function deleteCheck(e) {
  const item = e.target;
  //delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.toggle("fall");
    removeLocalTodos(todo);
    todo.addEventListener("transitionend", function () {
      todo.remove(); //将todo从dom树中删除,childnote.remove()
    });
  }
  //check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filterTodo(e) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}

function saveLocalTodos(todo) {
  //check do i hava already have thing in rhere
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //ceate LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //add todo to localstorage

    //check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //append to list
    todoList.appendChild(todoDiv);
  });
}
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}
