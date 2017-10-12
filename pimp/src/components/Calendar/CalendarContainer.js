import React from 'react';
import {Component} from "react/cjs/react.production.min";
import Calendar from 'react-calendar/build/entry.nostyle';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  // Makes a specific date blue
  // Can use this to mark event dates
  // The date and month must be integers
  addEventOnDay(date, month) {
    const buttons = document.getElementsByClassName("react-calendar__month-view__days__day");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      let dateObject
        = new Date(button.firstChild.attributes.item(0).textContent);
      let buttonDate = dateObject.getDate();
      let buttonMonth = dateObject.getMonth();
      if (buttonDate === date && buttonMonth === month) {
        button.style.background = "#3498db";
      } else {
        button.style.background = "#ecf0f1";
      }
    }
  }
  
  // Method runs when a day is clicked. Makes the day blue.
  handleClick(datetime) {
    const date = (datetime.getDate());
    let month = (datetime.getMonth());
    this.addEventOnDay(date, month);
  }
  
  render() {
    return (
      <Calendar onClickDay={(datetime) => this.handleClick(datetime)}/>
    )
  }
}

export default CalendarContainer;