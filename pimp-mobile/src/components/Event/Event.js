import React, { Component } from 'react';
import { Text, View } from "react-native";
import PropTypes from 'prop-types';
import { styles } from '../../styles.js';

class Event extends Component {

  render() {

    return(
      <View style={styles.event}>
        <Text style={[styles.title, styles.emerald]}>{this.props.title}</Text>
        <Text style={[styles.text, styles.emerald]}>{this.props.text}</Text>
        <Text style={[styles.text, styles.emerald]}>On {this.props.date}</Text>

      </View>
    )
  }
}

Event.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string
}

export default Event