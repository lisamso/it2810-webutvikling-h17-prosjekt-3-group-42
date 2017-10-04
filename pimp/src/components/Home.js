import React, { Component } from 'react';
import EventContainer from "./Event/EventContainer";
import NoteContainer from './Note/NoteContainer';
import ClockContainer from '../containers/ClockContainer';

class Home extends Component {
  constructor(props){
    super(props);
  }
  
  
  render() {
    return (
      <div id="home">
        <ClockContainer />
        <div className="container">
          <NoteContainer borderColor="carrot"/>
          <EventContainer borderColor="emerald"/>
        </div>
      </div>
    )
  }
}

export default Home;

