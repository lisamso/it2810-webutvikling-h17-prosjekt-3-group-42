import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Box extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      obj: props.obj,
      color: props.color,
    };
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
          {this.props.button}
        </div>
      </div>
    )
  }
}

Box.propTypes = {
  name: PropTypes.string,
  obj: PropTypes.array,
  color: PropTypes.string,
  button: PropTypes.object,
};

export default Box;
