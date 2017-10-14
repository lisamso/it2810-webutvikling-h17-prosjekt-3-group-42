import { StyleSheet } from 'react-native';

const carrot = '#e67e22';
const turquoise = '#1abc9c';
const emerald = '#2ecc71';
const wet_asphalt = '#34495e';
const concrete = '#95a5a6';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    alignItems: 'center',
  },

  text: {
    color: '#fff'
  },

  home: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: wet_asphalt
  },

  home_body: {
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    height: 50,
    marginTop: 22,
    alignItems: 'center'
  },

  box: {
    margin: 20,
    backgroundColor: wet_asphalt
  },

  box_header_carrot: {
    padding: 15,
    alignItems: 'center',
    borderColor: carrot,
    borderWidth: 5
  },

  box_body_carrot: {
    padding: 10,
    borderColor: carrot,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5
  },

  box_button_carrot: {
    backgroundColor: carrot,
    height: 40,
    alignItems: 'center'
  },

  box_header_turquoise: {
    padding: 15,
    alignItems: 'center',
    borderColor: turquoise,
    borderWidth: 5
  },

  box_body_turquoise: {
    padding: 10,
    borderColor: turquoise,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5
  },

  box_button_turquoise: {
    backgroundColor: turquoise,
    height: 40,
    alignItems: 'center'
  },

  box_header_emerald: {
    padding: 15,
    alignItems: 'center',
    borderColor: emerald,
    borderWidth: 5
  },

  box_body_emerald: {
    padding: 10,
    borderColor: emerald,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5
  },

  box_button_emerald: {
    backgroundColor: emerald,
    height: 40,
    alignItems: 'center'
  },

  carrot: {
    color: carrot,
    fontSize: 20,
  },

  turquoise: {
    color: turquoise,
    fontSize: 20,
  },

  emerald: {
    color: emerald,
    fontSize: 20,
  },

  wet_asphalt: {
    color: wet_asphalt,
    fontSize: 20,
  },

  h1: {
    fontSize: 25,
    color: concrete
  },

  h3: {
    fontSize: 15,
    color: concrete
  },

  delete_container: {
    flex: 1,
    justifyContent: 'space-around'
  },

  row_box: {
    flexDirection: 'row'
  },

  note_title: {
    fontSize: 20,
    color: carrot
  },

  note_text: {
    fontSize: 15,
    color: carrot
  },

  note_container: {
    flex: 4,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: carrot
  },


  note_delete: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderColor: carrot,
    borderWidth: 2,
    borderRadius: 50
  },

  note_delete_text: {
    fontSize: 30,
    color: carrot
  },

  todo_title: {
    fontSize: 20,
    color: turquoise
  },

  todo_text: {
    fontSize: 15,
    color: turquoise
  },

  todo_container: {
    flex: 4,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: turquoise
  },


  todo_delete: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderColor: turquoise,
    borderWidth: 2,
    borderRadius: 50
  },

  todo_delete_text: {
    fontSize: 30,
    color: turquoise
  },

  event_title: {
    fontSize: 20,
    color: emerald
  },

  event_text: {
    fontSize: 15,
    color: emerald
  },

  event_container: {
    flex: 4,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: emerald
  },


  event_delete: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderColor: emerald,
    borderWidth: 2,
    borderRadius: 50
  },

  event_delete_text: {
    fontSize: 30,
    color: emerald
  },

  clock_container: {
    padding: 10,
    alignItems: 'center'
  },

  weekday_text: {
    color: carrot,
    fontSize: 20
  },

  date_text: {
    color: turquoise,
    fontSize: 10,
  },

  time_text: {
    color: emerald,
    fontSize: 20
  }

});