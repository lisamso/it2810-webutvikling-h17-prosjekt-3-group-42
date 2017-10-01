import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6

class Note extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      createdAt: props.createdAt,
      titleFocused: false,
      textFocused: false,
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount(){
    this.titleRef.focus();
  }

  handleTitleChange(e){
    this.setState({
      title: e.target.value,
      titleFocused: true,
      textFocused: false});
  }

  handleTextChange(e){
    this.setState({
      text: e.target.value,
      titleFocused: false,
      textFocused: true});
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.textFocused){
      this.contentRef.blur();
    }
    if (this.state.titleFocused){
      this.contentRef.focus();
    }
  }


  render() {
    return (
      <div className='note'>
        <form className='note-form'
          onSubmit={this.handleSubmit}>
          <div className='group'>
            <input
              type='text'
              required
              name='title'
              ref={ref => this.titleRef = ref}
              placeholder="Title"
              onChange={this.handleTitleChange}
            />
            <input type='submit'/>
            <span className='bar'></span>
          </div>

          <div className='group'>
            <input
              type='text'
              required
              name='content'
              ref={ref => this.contentRef = ref}
              placeholder="Content"
              onChange={this.handleTextChange}
            />
            <span className='bar'></span>
          </div>
        </form>
      </div>
    )
  }
}

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  createdAt: PropTypes.object,
  titleFocused: PropTypes.bool,
  textFocused: PropTypes.bool,
};

export default Note;
