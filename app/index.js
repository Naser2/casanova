/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import RoutesNavigator from './Routes';

class App extends Component {
  render() {
    const Nav = RoutesNavigator();
    return (
      <View style={styles.container}>
        <Nav isAuth={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
  //, welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5
  // }
});

export default App;
