import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6
import Timestamp from 'react-timestamp';
import Box from '../Box'
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
    this.newNote("Note","Example note");
    this.newNote("Note 2", "Example note");
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
