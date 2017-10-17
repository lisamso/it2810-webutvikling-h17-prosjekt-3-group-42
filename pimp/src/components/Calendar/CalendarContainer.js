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
  addEventOnDay(date, eventHover) {
    const buttons = document.getElementsByClassName(
      "react-calendar__month-view__days__day");
    for (let i = 0; i < buttons.length; i++) {
      let btn = buttons[i]
      let btndate
        = new Date(buttons[i].firstChild.attributes.item(0).textContent);
      if (btndate.getDate() === date.getDate() &&
          btndate.getMonth() === date.getMonth()) {
        btn.style.background = "#2ecc71";
        btn.style.color = "black";
        btn.title = eventHover;
        btn.className += " tile-has-event"

      }
    }
  }
  
  componentWillUpdate() {
    JSON.parse(localStorage.getItem('events')).map((event)=>{
      let eventHover = `${event['title']}: ${event['text']}`
      this.addEventOnDay(new Date(Date.parse(event['eventAt'])), eventHover);
    })
  }
  
  render() {
    return (
      <Calendar showNavigation={false}/>
    )
  }
}

export default CalendarContainer;
