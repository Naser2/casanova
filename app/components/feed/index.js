import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class FeedComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.basicText}>Feed Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 40
  },
  // PageTitle: {
  //     backgroundColor: 'lightblue',
  //     textAlign: 'center',
  //     width: ' 100%',
  //     marginBottom: 5
  //   },
  basicText: {
    textAlign: 'center',
    color: 'purple',
    padding: 20,
    fontSize: 20
  }
});

export default FeedComponent;
