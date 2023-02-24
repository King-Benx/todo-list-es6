class ToDo {
  constructor() {
    const storedData = JSON.parse(localStorage.getItem('todo-es6'));
    if (storedData && storedData.length) {
      if (['index', 'description', 'completed'].every((it) => Object.keys(storedData[0]).includes(it))) {
        this.listOfToDos = storedData;
      } else {
        localStorage.clear();
        this.listOfToDos = [];
      }
    } else {
      this.listOfToDos = [];
    }
  }

  updateList() {
    this.listOfToDos = JSON.parse(localStorage.getItem('todo-es6'));
  }

  updateStorage(items) {
    localStorage.setItem('todo-es6', JSON.stringify(items));
    this.updateList();
  }

  setItemChecked(identifier, flag) {
    const data = this.listOfToDos;
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
    const data = this.listOfToDos;
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
    const allToDos = this.listOfToDos;
    const updatedData = [
      ...allToDos,
      { index: allToDos?.length + 1, description, completed },
    ];
    this.updateStorage(updatedData);
  }

  removeToDo(index) {
    const allToDos = this.listOfToDos;
    const updatedData = allToDos.filter((todo) => todo.index.toString() !== index);
    this.updateStorage(updatedData);
  }

  getListOfToDos() {
    return this.listOfToDos;
  }
}

const todo = new ToDo();

export default todo;