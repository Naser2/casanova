import React from 'react';
import { StyleSheet, Text, TextInput, View, Picker } from 'react-native';

const Input = props => {
  let template = null;
  switch (props.type) {
    case 'textinput':
      return (template = (
        <TextInput {...props} style={[styles.input, props.overideStyle]} />
      ));
      break;
    default:
      return template;
  }
  return template;
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    // backgroundColor: '#F5FCFF',
    fontSize: 16,

    marginTop: 10,
    // pointerColor: 'blue'
  }
});
export default Input;
