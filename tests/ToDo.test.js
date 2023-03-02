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

  test('todo.setItemChecked() updates completed status', () => {
    todo.setItemChecked('1', true);
    const checkedItem = todo.getListOfToDos().filter((it) => it.completed === true);
    expect(checkedItem.length).toBe(1);
  });

  test('todo.clearChecked() removes completed tasks', () => {
    todo.addToDo('three', false);
    todo.addToDo('four', false);
    todo.clearChecked();
    expect(todo.getListOfToDos().length).toBe(2);
  });
  
  test('todo.editTask(identifier, update)', () => {
      todo.editTask('1', 'Index one updated');
      const checkedItem = todo.getListOfToDos().filter((it) => it.description === 'Index one updated');
      expect(checkedItem.length).toBe(1);
  })
});
