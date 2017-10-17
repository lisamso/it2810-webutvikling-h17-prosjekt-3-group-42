import React, {Component} from 'react';
import {Clock} from './Clock';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const weekdays = [
  "Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"
];

class ClockContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  
  getWeekday() {
    const weekdayNumber = this.state.date.getDay();
    return weekdays[weekdayNumber]
  }
  
  getDayInMonth() {
    return this.state.date.getDate();
  }
  
  getMonth() {
    const monthNumber = this.state.date.getMonth();
    return monthNames[monthNumber];
  }
  
  getHours() {
    return this.state.date.getHours();
  }
  
  getMinutes() {
    let minutes = this.state.date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes.toString();
  }
  
  getSeconds() {
    let sec = this.state.date.getSeconds();
    if (sec < 10) {
      sec = "0" + sec;
    }
    return sec.toString();
  }
  
  render() {
    return (
      <Clock
        weekday={this.getWeekday()}
        month={this.getMonth()}
        hours={this.getHours()}
        minutes={this.getMinutes()}
        seconds={this.getSeconds()}
        day={this.getDayInMonth()}/>
    )
  }
}

export default ClockContainer;
