import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Box extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name,
      obj: props.obj,
    };
  }

  render() {
    return (
      <div className='box'>
        <h2>{ this.props.name }</h2>
        <p>{ this.props.obj }</p>
      </div>
    )
  }
}

Box.propTypes = {
  name: PropTypes.string,
  obj: PropTypes.object,
};

export default Box;
