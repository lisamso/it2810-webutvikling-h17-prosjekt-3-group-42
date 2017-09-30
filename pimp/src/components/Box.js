import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      obj: props.obj,
      button: props.button,
      color: props.color,
      items: [],
      item: props.item,
    };
    this.addNew = this.addNew.bind(this);
  }

  addNew(){
    alert("new object");
  }

  // TODO show dynamic objects from add new

  render() {
    return (
      <div className={`box ${this.state.color}`}>
        <h2 id="box-title">{ this.state.name }</h2>
        <hr/>
        <div className='box-container'>
          { this.props.obj }
        </div>
        <div id='btn'>
          { this.state.button && 
              <button onClick={this.addNew}>
                {this.state.button}
              </button>}
        </div>
      </div>
    )
  }
}

Box.propTypes = {
  name: PropTypes.string,
  obj: PropTypes.array,
  button: PropTypes.string,
  color: PropTypes.string,
  items: PropTypes.array,
  item: PropTypes.object,
};

export default Box;
