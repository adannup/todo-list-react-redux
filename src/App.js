import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

let nextTodo = 0;
class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: [],
      filter: 'SHOW_ALL',
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onToggleTodo = this.onToggleTodo.bind(this);
    this.onHandleFilter = this.onHandleFilter.bind(this);
    this.filterTodos = this.filterTodos.bind(this);
  }

  onFormSubmit(value) {
    this.setState({
      todos: this.addTodo(value)
    }, () => console.log(this.state));
  }

  onToggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          });
        }

        return todo;
      }),
    });
  }

  onHandleFilter(filter) {
    this.setState({
      filter
    });
  }

  addTodo(text) {
    const todo = {
      id: nextTodo++,
      completed: false,
      text,
    };

    return [...this.state.todos, todo];
  }

  filterTodos() {
    if(this.state.filter === 'SHOW_ACTIVE') {
      return this.state.todos.filter(todo => todo.completed === false);
    } else if(this.state.filter === 'SHOW_COMPLETED') {
      return this.state.todos.filter(todo => todo.completed === true);
    }

    return this.state.todos;
  }

  render () {
    return (
      <React.Fragment>
        <AddTodo onFormSubmit={this.onFormSubmit} />
        <TodoList todos={this.filterTodos()} onTodoClick={this.onToggleTodo} />
        <Footer onClickFilter={this.onHandleFilter} currentFilter={this.state.filter}/>
      </React.Fragment>
    )
  }
}

export default App;
