import React from 'react';

const TodoList = ({ todos, onTodoClick }) => {
  const todosList = todos.map(todo => (
    <li
      key={todo.id}
      href="#"
      onClick={() => onTodoClick(todo.id)}
      style={{ textDecoration:  todo.completed ? 'line-through' : 'none' }}
    >
      {todo.text}
    </li>
  ));

  return (
    <ul>
      {todosList}
    </ul>
  );
};

export default TodoList;
