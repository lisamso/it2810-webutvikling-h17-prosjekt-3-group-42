import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Note extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: props.title,
      text: props.text,
      createdAt: props.createdAt,
    }
  }
  render() {
    return (
      <div className='note'>
        <h2>{this.state.title}</h2>
        <p>{`> ${this.state.text}`}</p>
        <div id='created-at'>
          <hr/>
          <p>{this.state.createdAt}</p>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  createdAt: PropTypes.string,
};

export default Note;
