// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

// add your code here
const ul = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const addButton = document.querySelector('.add-btn');
const form = document.querySelector('form');
const textInput = document.querySelector('form input');
let nextId = 6;
function createTodoItem(todo) {
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `todo-${todo.id}`;
  input.checked = todo.completed;
  const label = document.createElement('label');
  label.htmlFor = `todo-${todo.id}`;
  label.textContent = todo.task;
  input.addEventListener('change', function () {
    todo.completed = input.checked;
    console.log(todoList);
  });

  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.addEventListener('click', function () {
    const index = todoList.indexOf(todo);
    todoList.splice(index, 1);
    ul.removeChild(li);
    console.log(todoList);
  });
  li.appendChild(button);
  li.appendChild(input);
  li.appendChild(label);
  ul.appendChild(li);
}

for (let todo of todoList) {
  createTodoItem(todo);
}

addButton.addEventListener('click', function () {
  dialog.showModal();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const newTodo = {
    id: nextId,
    task: textInput.value,
    completed: false,
  };
  todoList.push(newTodo);
  createTodoItem(newTodo);
  nextId++;
  console.log(todoList);
  form.reset();
  dialog.close();
});
