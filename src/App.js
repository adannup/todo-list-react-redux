import React from 'react';
import AddTodoContainer from './AddTodoContainer';
import TodoListContainer from './TodoListContainer';
import Footer from './Footer';

const App = () => (
  <React.Fragment>
    <AddTodoContainer />
    <TodoListContainer />
    <Footer />
  </React.Fragment>
);

export default App;
