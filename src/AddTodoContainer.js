import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import { addTodo } from './actions';

const mapDispatchToProps = dispatch => {
  return{
    addTodo: text => {
      dispatch(addTodo(text));
    },
  }
};

const AddTodoContainer = connect(undefined, mapDispatchToProps)(AddTodo);

export default AddTodoContainer;
