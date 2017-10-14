import React, { Component } from 'react';
import { Text, View } from "react-native";
import PropTypes from 'prop-types';
import { styles } from '../../styles.js';

class Event extends Component {

  render() {

    return(
      <View style={styles.event}>
        <Text style={styles.event_title}>{this.props.title}</Text>
        <Text style={styles.event_text}>{this.props.text}</Text>
        <Text style={styles.event_text}>On {this.props.date}</Text>

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