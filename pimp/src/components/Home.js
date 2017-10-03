import React, { Component } from 'react';
import EventContainer from "./Event/EventContainer";
import NoteContainer from './Note/NoteContainer';
import Clock from './Clock';

class Home extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div id="home">
        <Clock />
        <div className="container">
          <NoteContainer borderColor="carrot"/>
          <EventContainer borderColor="emerald"/>
        </div>
      </div>
    )
  }
}

export default Home;
