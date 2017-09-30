import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import Timestamp from 'react-timestamp';
import Box from './Box'
import Note from './Note'

class NoteContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [], // used to render all notes
    };
    this.newNote = this.newNote.bind(this);
  }

  componentDidMount(){
    this.newNote("Koden er endret","Home.js er ryddet slik den bare importerer de forskjellige modulene vår applikasjon trenger.");
    this.newNote("Ny klasse", "Den nye klassen NoteContainer.js er da listen som inneholder alle Notes. Denne Cointainer-klassen, og alle andre lignende klasser, importerer Box.js");
    this.newNote("Forbedringer", "Dette fører til forbedringer ved at vi får ryddet i Home.js ved å legge all kode som har med feks Notes å gjøre i NoteContainer (listeners, newNote, form til å lage nye notes etc). Hver enkelt modul kan da ha en lignende klasse som importerer Box.js, for en lesbar, parallellisebar, og ekspanderbar kodebase.");
    this.newNote("God helg!", "(plz godkjenn pull-requesten kthxbye)");
  }

  newNote(note_title, note_text){
    let timeStamp = <Timestamp
      time={note_title.created_at}
      format='full'
    />;

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
      <div className='container'>
        <div className='container-item' id='Notes'>
          <Box
            color={this.props.borderColor}
            name='Your notes'
            obj={this.state.notes.map((n,idx) =>
              <div className='box-item'
                key={idx}>{n}</div>
            )}
            button={'New note'}
          />
        </div>
      </div>
    )
  }
}

NoteContainer.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  createdAt: PropTypes.string,
  borderColor: PropTypes.string
};

export default NoteContainer;
