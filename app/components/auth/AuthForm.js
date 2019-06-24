import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Input from '../../utils/forms/Input';

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to regidter',
    hasErrors: true,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isrequired: true,
          isEmail: true
        }
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isrequired: true,
          minLength: 6
        }
      },
      confirmPassword: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: 'confoirmPassword'
        }
      }
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });
    let formCopy = this.state.form;
    formCopy[name].value = value;

    this.setState({
      form: formCopy
    });
  };

  formHasErrors = () => {
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Ooops somethings went wrong</Text>
      </View>
    ) : null;
  };

  confirmPassword = () => {
    this.state.type != 'Login' ? (
      <Input
        placeholder="Confirm password"
        placeholderTextColor="black"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText={value => this.updateInput('confirmPassword', value)}
        secureTextEntry
      />
    ) : null;
  };

  render() {
    return (
      <View>
        <Input
          placeholder="Enter email"
          placeholderTextColor="black"
          autoCapitalize={'none'}
          type={this.state.form.email.type}
          value={this.state.form.email.value}
          keybaordType={'email-addres'}
          onChangeText={value => this.updateInput('email', value)}
        />
        <Input
          placeholder="Enter password"
          placeholderTextColor="black"
          type={this.state.form.password.type}
          value={this.state.form.password.value}
          onChangeText={value => this.updateInput('password', value)}
          secureTextEntry
        />

        {this.confirmPassword()}
        {this.formHasErrors()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  errorContainer: {
    backgroundColor: '#f44336',
    marginBottom: 10,
    marginTop: 30
  },
  errorLabel: {
    color: '#FFF',
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});

export default AuthForm;
