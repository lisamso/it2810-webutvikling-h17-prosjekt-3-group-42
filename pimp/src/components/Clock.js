import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  getHours() {
    return this.state.date.getHours();
  }

  getMinutes() {
    let minutes = this.state.date.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes;
  }

  getSeconds() {
    let sec = this.state.date.getSeconds();
    if (sec < 10) {
      sec = "0" + sec;
    }
    return sec;
  }

  render() {
    return (
      <div>
        <h3>It is {this.getHours() + ":" +
      this.getMinutes() + ":" +
      this.getSeconds()}.</h3>
      </div>
    );
  }
}

export default Clock;
