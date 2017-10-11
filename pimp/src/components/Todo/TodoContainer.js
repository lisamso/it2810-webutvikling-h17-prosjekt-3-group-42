import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Box from '../Box';

const Todo = ({todo, remove}) => {
  return (
    <div className='box-item'>
      {todo.value}
      <p></p>
      <div id = "button-todo">
        <button className='button-add-new-todo'
          onClick={()=> {
            remove(todo.id)
          }}>
        </button>
      </div>
    </div>
  );
};


const List = ({todos, remove}) => {
  let allTodos = [];
  if(todos.length > 0) {
    allTodos = todos.map(todo => {
      return ( <Todo key = {todo.id} todo={todo} remove={remove} /> );
    });
  } else {
    allTodos.push(<h3 align="center">No more tasks</h3>);
  }

  return (
    <div>
      {allTodos}
    </div>
  );
};


class TodoContainer extends Component {
  constructor(props) {
    super(props);

    const introData = [
      {
        id: -1,
        value: "Add new todos and come " +
        "back any time later, I will save them for you!"
      }
    ];


    const localStorageData = localStorage.todos
      && JSON.parse(localStorage.todos);

    this.state = {
      data: localStorageData || introData,
      value: ''
    };

    // binding metoder
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeFinishedTodo = this.removeFinishedTodo.bind(this);
    this.handleChangeForTodo = this.handleChangeForTodo.bind(this);
    this.handleAddingNewTodo = this.handleAddingNewTodo.bind(this);
  }
  handleChangeForTodo(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleAddingNewTodo() {
    if(this.input.value !== '') {
      this.addNewTodo(this.input.value);
      this.setState({
        value: ''
      });
      this.input.placeholder = "Legg til todo elementer her";
    }
  }

  // Handler for å oppdatere dataen
  updateLocalData() {
    if (typeof(Storage) !== "undefined")
      localStorage.todos = JSON.stringify(this.state.data);
  }

  // Handler for å legge til ny todo
  addNewTodo(value) {
    let id;
    if (typeof(Storage) !== "undefined") {
      id = Number(localStorage.count);
      localStorage.count = Number(localStorage.count) + 1;
    } else {
      id = window.id++;
    }

    const todo = {
      value: value,
      id: id
    };

    this.state.data.push(todo);
    this.setState({
      data: this.state.data
    }, () => {
      this.updateLocalData();
    });
  }

  // Handler for å fjerne todo
  removeFinishedTodo(id) {
    const list = this.state.data.filter(todo => {
      if (todo.id !== id)
        return todo;
    });
    this.setState({
      data: list
    }, () => {
      this.updateLocalData();
    });
  }


  componentDidMount() {
    if(!localStorage.todos) {
      localStorage.todos = JSON.stringify(this.state.data);
    }
    if(!localStorage.count) {
      localStorage.count = 0;
    }

  }



  render() {
    const todoForm =
      <div className='Todo'>
        <div className = 'group'>
          <input className='input'
            type='text'
            required
            name='title'
            ref={node => {
              this.input = node;
            }}
            value={this.state.value}
            placeholder="Legg til todo elementer her "
            autoComplete="off"
            onChange={this.handleChangeForTodo}/>
          <span className='bar'></span>


        </div>
        <div className='group'>
          <List todos={this.state.data}
            remove={this.removeFinishedTodo} />
        </div>
      </div>


    const addNewTodoButton = <button
      onClick={this.handleAddingNewTodo}
    >
      Add a new Todo
    </button>

    return (
      <div className='container-item' id ='Todo'>
        <Box
          color = {this.props.borderColor}
          name = 'Your Todo'

          obj = {[todoForm]}
          button={addNewTodoButton} />
      </div>
    );
  }

}

Todo.propTypes = {
  todo: PropTypes.object,
  remove: PropTypes.func
};

List.propTypes = {
  todos: PropTypes.array,
  remove: PropTypes.func
};

TodoContainer.propTypes = {
  addNewTodo: PropTypes.string,
  borderColor: PropTypes.string
};


export default TodoContainer;

