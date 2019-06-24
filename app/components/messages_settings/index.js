import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

class CasanovaSettingsComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.basicText}>Casanova Messages Settings</Text>
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
  basicText: {
    textAlign: 'center',
    color: 'purple',
    padding: 20,
    fontSize: 20
  }
});

export default CasanovaSettingsComponent;
