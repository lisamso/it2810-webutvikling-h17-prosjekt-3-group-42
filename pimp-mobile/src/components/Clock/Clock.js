import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from "react-native"; // ES6
import { styles } from '../../styles.js';

export class Clock extends Component {
  render() {
    const weekday = this.props.weekday;
    const month = this.props.month;
    const hours = this.props.hours;
    const minutes = this.props.minutes;
    const seconds = this.props.seconds;
    const day = this.props.day;
    return (
      <View style={styles.clock_container}>
        <Text style={styles.weekday_text}>{weekday}</Text>
        <Text style={styles.date_text}>{day} {month}</Text>
        <Text style={styles.time_text}>{hours}:{minutes}:{seconds}</Text>
      </View>
    )
  }
}

Clock.propTypes = {
  weekday: PropTypes.string,
  month: PropTypes.string,
  hours: PropTypes.number,
  minutes: PropTypes.string,
  seconds: PropTypes.string,
  day: PropTypes.number,
}
