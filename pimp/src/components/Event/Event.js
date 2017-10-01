import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      createdAt: props.createdAt,
    }
  }
  render() {
    return (
      <div className='event'>
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

Event.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  createdAt: PropTypes.object,
};

export default Event;