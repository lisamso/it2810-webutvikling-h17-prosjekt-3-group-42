import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Event extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    console.log("Delete!");
    let LS = JSON.parse(
      localStorage.getItem('events'));
    if(LS) {
      let searchTerm = this.props.id,
        index = -1;
      for(let i = 0, len = LS.length; i < len; i++) {
        if (LS[i].id === searchTerm) {
          index = i;
          break;
        }
      }
      LS.splice(index, 1);
      localStorage.setItem('events',
        JSON.stringify(LS));
      this.props.update();
    }
  }

  render() {
    return (
      <div className='event'>
        <h2>{this.props.title}</h2>
        <p>{`> ${this.props.text}`}</p>
        <div id='event-at'>
          <hr/>
          <p>The event is on {this.props.eventAt}</p>
        </div>
        <button className="someButton" onClick={this.handleDelete}>Delete</button>
      </div>
    )
  }
}

Event.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  eventAt: PropTypes.string,
  update: PropTypes.func
};

export default Event;
