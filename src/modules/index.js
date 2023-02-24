import '../styles/style.scss';

const list = document.getElementById('list');
const form = document.getElementById('form');

const todo = [
  {
    description: 'Create index file',
    index: 2,
    completed: true,
  },
  {
    description: 'Setup linters',
    index: 4,
    completed: false,
  },
  {
    description: 'Finish project',
    index: 1,
    completed: false,
  },
  {
    description: 'Deploy project',
    index: 3,
    completed: true,
  },
];

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
  const label = document.createElement('label');
  label.htmlFor = index;
  label.innerText = description;
  const spanContainer = document.createElement('span');
  const iconContainer = document.createElement('i');
  iconContainer.className = 'fas';
  iconContainer.innerHTML = '';
  spanContainer.append(iconContainer);
  inputContainer.append(input);
  inputContainer.append(label);
  listItemContainer.append(inputContainer);
  listItemContainer.append(spanContainer);
  listItem.append(listItemContainer);
  list.append(listItem);
};

const sortData = (data) => data.sort((a, b) => a.index - b.index);

const showList = () => {
  const listOfToDos = sortData(todo);
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
