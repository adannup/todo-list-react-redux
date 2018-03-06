const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

let nextTodoId = 0;
const addTodo = text => {
  return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text,
    };
};

const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export {
  toggleTodo,
  addTodo,
  setVisibilityFilter,
};
