import React, { Component } from 'react';
import EventContainer from "./Event/EventContainer";
import NoteContainer from './Note/NoteContainer';
import Clock from './Clock';

const pageTitle = page => `Welcome to ${page.title}`;

const page = {
  title: 'PIMP',
  subTitle: 'Personal Information Manager (PRO)',
};

class Home extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div>
        <div id="welcome">
          <h1>{pageTitle(page)}!</h1>
          <p>{page.subTitle}</p>
        </div>
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
