import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onChangeInput = this.onChangeInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onChangeInput(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.todoText.value = '';
    this.props.addTodo(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" onChange={this.onChangeInput} ref={e => { this.todoText = e; }} />
        <input type="submit" value="Add" />
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
