const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

let nextTodoId = 0;

const getID = () => {
  nextTodoId += 1;
  return nextTodoId;
};

const addTodo = text => ({
  type: 'ADD_TODO',
  id: getID(),
  text,
});

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export {
  toggleTodo,
  addTodo,
  setVisibilityFilter,
};
