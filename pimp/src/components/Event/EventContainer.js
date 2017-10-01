import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Timestamp from 'react-timestamp';
import Box from '../Box'
import Event from './Event'

class EventContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.newEvent("Event", "Remember to pack lunch");
    this.newEvent("Another event", "Some comment");
  }

  newEvent(note_title, note_text){
    let timeStamp = <Timestamp
      time={note_title.created_at}
      format='full'
    />;

    this.setState(prevState => ({
      events: [...prevState.events,
        <Event
          key={timeStamp}
          title={note_title}
          text={note_text}
          createdAt={timeStamp}
        />],
    }));
  }

  addNew(){
    alert("New Event Clicked");
  }

  render() {
    const eventBtn =
      <button onClick={this.addNew}>New event</button>;

    return (
      <div className="container">
        <div className="container-item" id="Events">
          <Box
            color={this.props.borderColor}
            name="Your upcoming events"
            obj={this.state.events.map((n,idx) =>
              <div className='box-item'
                key={idx}>{n}</div>
            )}
            button={eventBtn}
          />
        </div>
      </div>
    )
  }
}

EventContainer.propTypes = {
  borderColor: PropTypes.string
};

export default EventContainer;