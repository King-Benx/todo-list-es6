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
});