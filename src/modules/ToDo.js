class ToDo {
  constructor() {
    const storedData = JSON.parse(localStorage.getItem('todo-es6'));
    this.listOfToDos = storedData || [];
  }

  updateList() {
    this.listOfToDos = JSON.parse(localStorage.getItem('todo-es6'));
  }

  updateStorage(items) {
    localStorage.setItem('todo-es6', JSON.stringify(this.sortList(items)));
    this.updateList();
  }

  setItemChecked(identifier, flag) {
    const data = this.getListOfToDos();
    const updatedData = data.map((it) => {
      if (it.index.toString() === identifier.toString()) {
        return {
          ...it,
          completed: flag,
        };
      }
      return it;
    });
    this.updateStorage(updatedData);
  }

  editTask(identifier, update) {
    const data = this.getListOfToDos();
    const updatedData = data.map((it) => {
      if (it.index.toString() === identifier.toString()) {
        return {
          ...it,
          description: update,
        };
      }
      return it;
    });
    this.updateStorage(updatedData);
  }

  addToDo(description, completed) {
    const allToDos = this.getListOfToDos();
    const updatedData = [
      ...allToDos,
      { index: allToDos?.length + 1, description, completed },
    ];
    this.updateStorage(updatedData);
  }

  removeToDo(index) {
    const allToDos = this.getListOfToDos();
    const updatedData = allToDos.filter((it) => it.index.toString() !== index);
    this.updateStorage(this.sortList(updatedData));
  }

  getListOfToDos() {
    return this.listOfToDos;
  }

sortList = (items) => {
  const sortedList = [];
  for (let i = 0; i < items.length; i += 1) {
    sortedList.push({ ...items[i], index: i + 1 });
  }
  return sortedList;
}
}

const todo = new ToDo();

export default todo;