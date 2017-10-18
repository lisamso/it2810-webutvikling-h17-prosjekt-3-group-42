import React, { Component } from 'react';
import {ScrollView, Text, View} from 'react-native';
import NoteContainer from "./Note/NoteContainer";
import { styles } from '../styles'
import TodoContainer from "./Todo/TodoContainer";
import EventContainer from "./Event/EventContainer";
import ClockContainer from "./Clock/ClockContainer";

class Home extends Component {

  render() {
    return (
      <View style={styles.home}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.h1}>PIMP Mobile</Text>
            <Text style={styles.h3}>For pimping on the go!</Text>
          </View>
          <View style={styles.home_body}>
            <ClockContainer/>
            <NoteContainer/>
            <TodoContainer/>
            <EventContainer/>
          </View>
        </ScrollView>
      </View>
    )
  }
}


export default Home;

