import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChangeForToDo = this.handleChangeForToDo.bind(this);
    this.handleAddingNewTodo = this.handleAddingNewTodo.bind(this);
  }

  handleChangeForToDo(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleAddingNewTodo() {
    if(this.input.value !== '') {
      this.props.addNewTodo(this.input.value);
      this.setState({
        value: ''
      });
      this.input.placeholder = "Legg til todo elementer her";
    }
  }

  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
          value={this.state.value}
          placeholder="Legg til todo elementer her "
          autoComplete="off"
          onChange={this.handleChangeForToDo}/>
        <button
          onClick={this.handleAddingNewTodo}
        >
          Ny Todo
        </button>




      </div>
    );
  }
}

TodoForm.propTypes= {
  addNewTodo: PropTypes.string
};

export default TodoForm;


