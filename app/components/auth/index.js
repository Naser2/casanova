import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  ActivityIndicator
} from 'react-native';

import AuthLogo from './AuthLogo';
import AuthForm from './AuthForm';

class AuthComponent extends Component {
  state = {
    loading: false
  };
  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (
        <ScrollView style={styles.container}>
          <View>
            <AuthLogo />
            <AuthForm />
          </View>
        </ScrollView>
      );

      // <Button
      //   title="go"
      //   onPress={() => this.props.navigation.navigate('App')}
      // />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    padding: 50
  },
  loading: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'orange'
  }
});

export default AuthComponent;
