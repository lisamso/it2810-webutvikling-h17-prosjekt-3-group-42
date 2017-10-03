import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Komponent struktur
// --------------------
// TodoContainer
// --> Tittel
// --> Form
// --> Liste
// ----> Todo

// Tittel konstanten - stateless component
const Title = () => {
  return (
    <div>
      <h2>En TODO list</h2>
    </div>
  );
};


class Form extends Component {
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
          onChange={this.handleChangeForToDo}
        />

        <button
          onClick={this.handleAddingNewTodo}
        >
                    Ny Todo
        </button>
      </div>
    );
  }
}

const Todo = ({todo, remove}) => {
  return (
    <p>
      {todo.value}
      <span
        onClick={()=> {
          remove(todo.id)
        }}>
				Fjern
      </span>
    </p>
  );
};

const List = ({todos, remove}) => {
  let allTodos = [];

  if(todos.length > 0) {
    allTodos = todos.map(todo => {
      return ( <Todo key = {todo} todo={todo} remove={remove} />);
    });
  } else {
    allTodos.push(<h3>Wo Ho! På tid å ta helg!</h3>);
  }

  return (
    <div>
      <p> Dine todos: </p>
      {allTodos}
    </div>
  );
};

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    const introData = [
      {
        id: -3,
        value: "Hei - dette er en test. "
      },
      {
        id: -2,
        value: "Hipp hopp livet er topp "
      },
      {
        id: -1,
        value: "Lagrer todoene for deg."
      }
    ];
    const localStorageData = localStorage.todos
      && JSON.parse(localStorage.todos);

    this.state = {
      data: introData || localStorageData
    };

    // binding metoder
    this.addNewTodo = this.addNewTodo.bind(this);
    this.removeFinishedTodo = this.removeFinishedTodo.bind(this);
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
    localStorage.clear();
    if (typeof(Storage) !== "undefined") {
      if(!localStorage.todos) {
        localStorage.todos = JSON.stringify(this.state.data);
      }
      if(!localStorage.count) {
        localStorage.count = 0;
      }

    }
    /*else {
      console.log("Hmm --- Dette gir ikke mening: " +
        "Feilmelding: %cApp will not remember todos " +
        "created as LocalStorage Is Not Available",
      "color: hotpink; background: #333; font-size: " +
        "x-large;font-family: Courier;");
      window.id = 0;
    }
    */
  }

  render() {
    return (
      <div>
        <Title />
        <Form addTodo={this.addNewTodo} />
        <List todos={this.state.data}
          remove={this.removeFinishedTodo} />
      </div>
    );
  }

}




Todo.propTypes = {
  todo: PropTypes.string,
  remove: PropTypes.string
};

List.propTypes = {
  todos: PropTypes.string,
  remove: PropTypes.string
};

Form.propTypes= {
  addNewTodo: PropTypes.string
};


//export default Title;
export default TodoContainer;







