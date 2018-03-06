import React, { Component } from 'react';

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
    this.refs.name.value = '';
    this.props.addTodo(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" onChange={this.onChangeInput} ref="name"/>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

export default AddTodo;
