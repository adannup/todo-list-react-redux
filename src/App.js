import React, { Component } from 'react';
import AddTodoContainer from './AddTodoContainer';
import TodoListContainer from './TodoListContainer';
import Footer from './Footer';


class App extends Component {
  render () {
    return (
      <React.Fragment>
        <AddTodoContainer />
        <TodoListContainer />
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
