import React, { Component } from 'react';
import { Text, View } from "react-native";
import PropTypes from 'prop-types';
import { styles } from '../../styles.js';

class Todo extends Component {

  render() {

    return(
      <View style={styles.todo}>
        <Text style={styles.todo_text}>{this.props.text}</Text>
      </View>
    )
  }
}

Todo.propTypes = {
  text: PropTypes.string,
}

export default Todo