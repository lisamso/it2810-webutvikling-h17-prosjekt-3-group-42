import React, { Component } from 'react';
import {Text, View} from "react-native";
import PropTypes from 'prop-types';
import { styles } from '../../styles.js';

class Note extends Component {

  render() {

    return(
      <View style={styles.note}>
        <Text style={styles.note_title}>{this.props.title}</Text>
        <Text style={styles.note_text}>{this.props.text}</Text>
      </View>
    )
  }
}

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Note