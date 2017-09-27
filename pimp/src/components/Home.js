import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import Timestamp from 'react-timestamp';
import Box from './Box';
import Note from './Note';

const pageTitle = page => `Welcome to ${page.title}`;

const page = {
  title: 'PIMP',
  subTitle: 'Personal Information Manager (PRO)',
};

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [], // used to render all notes
    };
    this.newNote = this.newNote.bind(this);
  }

  componentDidMount(){
    this.newNote("heiisann","oops");
    this.newNote("Dette er et notat", "med dette som tekst");
    this.newNote("enda et notat", "asdfasdadasd");
  }

  newNote(note_title, note_text){
    let timeStamp = <Timestamp
      time={note_title.created_at}
      format='full'
    />

    this.setState(prevState => ({
      notes: [...prevState.notes, 
        <Note
          key={timeStamp}
          title={note_title}
          text={note_text}
          createdAt={timeStamp}
        />],
    }));
  }

  render() {
    return (
      <div>
        <div id="welcome">
          <h1>{pageTitle(page)}!</h1>
          <p>{page.subTitle}</p>
        </div>
        <div className='container'>
          <div className='container-item' id='Notes'>
            <Box
              color='turquiose'
              name='Your notes' 
              obj={this.state.notes.map((n,idx) => 
                <div className='box-item' 
                  key={idx}>{n}</div>
              )}
              button={'New note'}
            />
          </div>
          <div className='container-item' id='Notes'>
            <Box
              color='carrot'
              name='Your notes' 
              obj={this.state.notes.map((n,idx) => 
                <div className='box-item' 
                  key={idx}>{n}</div>
              )}
              button={'New note'}
            />
          </div>
        </div>
      </div>
    )
  }
}

Note.propTypes = {
  notes: PropTypes.array,
};

export default Home;
