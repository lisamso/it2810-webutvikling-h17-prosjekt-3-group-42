import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      eventAt: props.eventAt,
    }
  }
  render() {
    return (
      <div className='event'>
        <h2>{this.state.title}</h2>
        <p>{`> ${this.state.text}`}</p>
        <div id='event-at'>
          <hr/>
          <p>The event is on {this.state.eventAt}</p>
        </div>
      </div>
    )
  }
}

Event.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  eventAt: PropTypes.string
};

export default Event;