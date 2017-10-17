import { StyleSheet } from 'react-native';

const carrot = '#e67e22';
const turquoise = '#1abc9c';
const emerald = '#2ecc71';
const wet_asphalt = '#34495e';
const concrete = '#95a5a6';

export const styles = StyleSheet.create({
  carrot: {
    color: carrot
  },

  carrot_border: {
    borderColor: carrot
  },

  carrot_background: {
    backgroundColor: carrot
  },

  turquoise: {
    color: turquoise
  },

  turquoise_border: {
    borderColor: turquoise
  },

  turquoise_background: {
    backgroundColor: turquoise
  },

  emerald: {
    color: emerald
  },

  emerald_border: {
    borderColor: emerald
  },

  emerald_background: {
    backgroundColor: emerald
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

  box_header: {
    padding: 15,
    alignItems: 'center',
    borderColor: carrot,
    borderWidth: 5
  },

  box_body: {
    padding: 10,
    borderColor: carrot,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 5
  },

  box_button: {
    backgroundColor: carrot,
    height: 40,
    alignItems: 'center'
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

  container: {
    flex: 4,
    paddingTop: 5,
    paddingBottom: 10,
    borderBottomWidth: 2,
  },

  delete_border: {
    width: 50,
    height: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50
  },

  delete_text: {
    fontSize: 30,
  },

  text: {
    fontSize: 15
  },

  title: {
    fontSize: 20
  },

  note_title: {
    fontSize: 20,
    color: carrot
  },

  note_text: {
    fontSize: 15,
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

  event_title: {
    fontSize: 20,
    color: emerald
  },

  event_text: {
    fontSize: 15,
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