import change from './UserInteraction.js';
import todo from './ToDo.js';
import '../styles/style.scss';

const list = document.getElementById('list');
const form = document.getElementById('form');
const todoInput = document.getElementById('todo');
const clearList = document.getElementById('clear-list');

const createToDo = (index, description, completed) => {
  const listItem = document.createElement('li');
  const listItemContainer = document.createElement('div');
  listItemContainer.className = 'todo-item';
  const inputContainer = document.createElement('div');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = index;
  input.id = index;
  input.value = description;
  input.className = 'to-do-item';
  input.checked = completed;
  const todoInput = document.createElement('input');
  todoInput.id = index;
  todoInput.value = description;
  todoInput.className = 'todo-form-input';
  const spanContainer = document.createElement('button');
  spanContainer.classList.add('button-delete');
  spanContainer.id = index;
  const iconContainer = document.createElement('i');
  iconContainer.className = 'fas';
  iconContainer.classList.add('trash-delete');
  iconContainer.innerHTML = '';
  spanContainer.append(iconContainer);
  inputContainer.append(input);
  inputContainer.append(todoInput);
  listItemContainer.append(inputContainer);
  listItemContainer.append(spanContainer);
  listItem.append(listItemContainer);
  list.append(listItem);
};

const showList = () => {
  const listOfToDos = todo.getListOfToDos() || [];
  if (listOfToDos.length) {
    for (let i = 0; i < listOfToDos.length; i += 1) {
      const { index, description, completed } = listOfToDos[i];
      createToDo(index, description, completed);
    }
  }
};

const populateView = () => {
  form.reset();
  list.innerHTML = '';
  showList();
};

populateView();

todoInput.addEventListener('keypress', (e) => {
  e.stopPropagation();
  if (e.key === 'Enter') {
    if (e.target.value.length) {
      todo.addToDo(e.target.value, false);
      populateView();
    }
  }
});

clearList.addEventListener('click', (e) => {
  e.preventDefault();
  const allToDos = todo.getListOfToDos();
  const updatedData = allToDos.filter((it) => it.completed !== true);
  todo.updateStorage(updatedData);
  populateView();
});

list.addEventListener('keypress', (e) => {
  e.stopPropagation();
  const target = e.target.closest('.todo-form-input');
  if (target) {
    if (e.key === 'Enter') {
      todo.editTask(target.id, target.value);
      populateView();
    }
  }
});

list.addEventListener('click', (e) => {
  const target = e.target.closest('.to-do-item');
  const deleteTarget = e.target.closest('.button-delete');
  if (target) {
    change(target.id, target.checked);
    populateView();
  }
  if (deleteTarget) {
    todo.removeToDo(deleteTarget.id);
    populateView();
  }
});
