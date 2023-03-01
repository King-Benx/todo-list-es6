import todo from '../src/modules/ToDo.js';

describe('ToDo Tests', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('todo.add() can add an item', () => {
    todo.addToDo('one', false);
    todo.addToDo('two', false);
    const itemsLength = todo.getListOfToDos().length;
    expect(itemsLength).toBe(2);
  });
  test('todo.removeToDo() can remove an item', () => {
    todo.removeToDo('1');
    const itemsLength = todo.getListOfToDos().length;
    expect(itemsLength).toBe(1);
  });
});