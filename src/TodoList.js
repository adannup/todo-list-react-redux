import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onTodoClick }) => {
  const todosList = todos.map(todo => (
    <li
      key={todo.id}
      href="#"
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}{' '}
      <button onClick={() => onTodoClick(todo.id)} >Toggle</button>
    </li>
  ));

  return (
    <ul>
      {todosList}
    </ul>
  );
};

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
};

export default TodoList;
