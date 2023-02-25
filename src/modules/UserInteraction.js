import todo from './ToDo.js';

const change = (id, status) => {
  todo.setItemChecked(id, status);
};

export default change;