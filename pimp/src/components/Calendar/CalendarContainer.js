import React from 'react';
import {Component} from "react/cjs/react.production.min";
import Calendar from 'react-calendar/build/entry.nostyle';
import Event from './../Event/Event';
import moment from "moment";

class CalendarContainer extends Component {
  constructor(props) {
    super(props);
    
    this.addEventOnDay = this.addEventOnDay.bind(this);
  }
  
  // Makes a specific date blue
  // Can use this to mark event dates
  // The date and month must be integers
  addEventOnDay(date, month) {
    const buttons = document.getElementsByClassName(
      "react-calendar__month-view__days__day");
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      let dateObject
        = new Date(button.firstChild.attributes.item(0).textContent);
      let buttonDate = dateObject.getDate();
      let buttonMonth = dateObject.getMonth();
      if (buttonDate === date && buttonMonth === month) {
        button.style.background = "#3498db";
      }
    }
  }
  
  componentWillUpdate() {
    let LS = JSON.parse(
      localStorage.getItem('events'));
    let fromStorage = [];
    if (LS){
      LS.map((event)=>{
        if (event['title']){
          let storageEvent =
            <Event
              key={
                moment(
                  event['eventAt']
                ).valueOf()}
              title={event['title']}
              text={event['text']}
              eventAt={
                moment(
                  event['eventAt']
                ).format("MM/DD")}
            />;
          fromStorage.push(storageEvent)
        }
      })
    }
    else {
      localStorage.setItem('events',
        JSON.stringify(fromStorage))
    }
    for (let i = 0; i < fromStorage.length; i++) {
      const date = parseInt(fromStorage[i].props.eventAt.substr(3,2));
      const month
        = parseInt(fromStorage[i].props.eventAt.substr(0,2))-1;
      this.addEventOnDay(date, month);
    }
  }
  
  render() {
    return (
      <Calendar />
    )
  }
}

export default CalendarContainer;
