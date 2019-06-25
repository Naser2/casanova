import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker
} from 'react-native';

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
    ...Platform.select({
      android: {
        width: '90%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#21A0DC',
        // backgroundColor: '#F5FCFF',
        fontSize: 20,
        marginTop: 10,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        paddingBottom: 7
      },
      ios: {
        width: '80%',
        borderBottomWidth: 0.5,
        borderBottomColor: '#21A0DC',
        // backgroundColor: '#F5FCFF',
        fontSize: 18,
        marginTop: 16,
        marginRight: 20,
        marginLeft: 20,
        marginBottom: 20,
        paddingBottom: 10
        // pointerColor: 'blue'
      }
    })
  }
});
export default Input;
