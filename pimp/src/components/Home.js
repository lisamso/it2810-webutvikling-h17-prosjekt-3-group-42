import React, { Component } from 'react';
import NoteContainer from './NoteContainer';

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
        <NoteContainer borderColor="carrot"/>
        <NoteContainer borderColor="turquoise"/>
        <NoteContainer borderColor="emerald"/>
        <NoteContainer borderColor="sun-flower"/>
      </div>
    )
  }
}

export default Home;
