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
  const spanContainer = document.createElement('span');
  const iconContainer = document.createElement('i');
  iconContainer.className = 'fas';
  iconContainer.innerHTML = '';
  spanContainer.append(iconContainer);
  inputContainer.append(input);
  inputContainer.append(todoInput);
  listItemContainer.append(inputContainer);
  listItemContainer.append(spanContainer);
  listItem.append(listItemContainer);
  list.append(listItem);
};

const sortData = (data) => data.sort((a, b) => a.index - b.index);

const showList = () => {
  const listOfToDos = sortData(todo.getListOfToDos());
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

const sortList = (items) => {
  const sortedList = [];
  for (let i = 0; i < items.length; i += 1) {
    sortedList.push({ ...items[i], index: i + 1 });
  }
  return sortedList;
};

todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    todo.addToDo(e.target.value, false);
    populateView();
  }
});

clearList.addEventListener('click', (e) => {
  e.preventDefault();
  const allToDos = todo.getListOfToDos();
  const updatedData = allToDos.filter((it) => it.completed !== true);
  todo.updateStorage(sortList(updatedData));
  populateView();
});

document.addEventListener('click', (e) => {
  const target = e.target.closest('.to-do-item');
  if (target) {
    todo.setItemChecked(target.id, target.checked);
    populateView();
  }
});

form.addEventListener('keypress', (e) => {
  const target = e.target.closest('.todo-form-input');
  if (target) {
    if (e.key === 'Enter') {
      todo.editTask(target.id, target.value);
      populateView();
    }
  }
});