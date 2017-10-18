import React, { Component } from 'react';
import {Text, View} from "react-native";
import PropTypes from 'prop-types';
import { styles } from '../../styles.js';

class Note extends Component {

  render() {

    return(
      <View style={styles.note}>
        <Text style={[styles.title, styles.carrot]}>{this.props.title}</Text>
        <Text style={[styles.text, styles.carrot]}>{this.props.text}</Text>
      </View>
    )
  }
}

Note.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
}

export default Note