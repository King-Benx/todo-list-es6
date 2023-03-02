import todo from '../src/modules/ToDo.js';

describe('DOM Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });
  /**
   * @jest-environment jsdom
   */
  test('todo.add() adds an item to DOM', () => {
    todo.addToDo('one');
    todo.addToDo('two');
    document.body.innerHTML = `
      <ol id="list"></ol>
    `;
    const list = document.getElementById('list');
    const listOfToDos = todo.getListOfToDos();
    for (let i = 0; i < listOfToDos.length; i += 1) {
      const { index, description, completed } = listOfToDos[i];
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
    }
    const listItems = document.querySelectorAll('#list li');
    expect(listItems.length).toBe(todo.getListOfToDos().length);
  });

  test('todo.remove() removes an item to DOM', () => {
    todo.removeToDo('1');
    document.body.innerHTML = `
      <ol id="list"></ol>
    `;
    const list = document.getElementById('list');
    const listOfToDos = todo.getListOfToDos();
    for (let i = 0; i < listOfToDos.length; i += 1) {
      const { index, description, completed } = listOfToDos[i];
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
    }
    const listItems = document.querySelectorAll('#list li');
    expect(listItems.length).toBe(1);
  });
});
