import React from 'react';
import {Component} from "react/cjs/react.production.min";
import Calendar from 'react-calendar/build/entry.nostyle';

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
    
    this.addEventOnDay = this.addEventOnDay.bind(this);
  }
  
  // Makes a specific date blue
  // Can use this to mark event dates
  // The date and month must be integers
  addEventOnDay(date) {
    const buttons = document.getElementsByClassName(
      "react-calendar__month-view__days__day");
    for (let i = 0; i < buttons.length; i++) {
      let btndate
        = new Date(buttons[i].firstChild.attributes.item(0).textContent);
      if (btndate.getDate() === date.getDate() &&
          btndate.getMonth() === date.getMonth()) {
        buttons[i].style.background = "#2ecc71";
        buttons[i].style.color = "black";
      }
    }
  }
  
  componentWillUpdate() {
    JSON.parse(localStorage.getItem('events')).map((event)=>{
      this.addEventOnDay(new Date(Date.parse(event['eventAt'])));
    })
  }
  
  render() {
    return (
      <Calendar showNavigation={false}/>
    )
  }
}

export default CalendarContainer;
