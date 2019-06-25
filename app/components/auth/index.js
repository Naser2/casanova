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

  goNext = () => {
    this.props.navigation.navigate('App');
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
            <AuthForm goNext={this.goNext}/>
          </View>
        </ScrollView>
      );
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
