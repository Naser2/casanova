import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Platform
} from 'react-native';
import Input from '../../utils/forms/Input';
import ValidationRules from '../../utils/forms/ValidationRules';
// import console = require('console');

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: 'I want to register',
    hasErrors: false,

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
          confirmPass: 'confirmPassword'
        }
      }
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });
    let formCopy = this.state.form;
    formCopy[name].value = value; // copy the form & set update the value of each input
    console.log(formCopy[name].value);

    let rules = formCopy[name].rules; //grab the rules of adequate name
    let valid = ValidationRules(value, rules, formCopy); // returns a  boolean
    // set the validity of the name of form state to what is returned by ValidationRules
    formCopy[name].valid = valid;
    this.setState({
      form: formCopy
    });
    // if (formCopy[name].valid !== valid) {
    //   this.setState({
    //     hasErrors: true
    //   });
    // } else {
    //   this.setState({
    //     form: formCopy
    //   });
    // }
  };

  formHasErrors = () => {
    // alert('hello ');
    if (this.state.hasErrors === true) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorLabel}>Ooops somethings went wrong</Text>
        </View>
      );
    }
  };

  confirmPassword = () => {
    if (this.state.type != 'Login') {
      return (
        <Input
          placeholder="Confirm password"
          placeholderTextColor="black"
          type={this.state.form.confirmPassword.type}
          value={this.state.form.confirmPassword.value}
          onChangeText={value => this.updateInput('confirmPassword', value)}
          secureTextEntry
        />
      );
    } else {
      return null;
    }
  };

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionMode: type === 'Login' ? 'I want to Login' : 'I want to register'
    });
  };

  submitUser = () => {
    let type = this.state.type;
    let isFormValid = true;
    let formToSubmit = {};
    let formCopy = this.state.form;

    for (let key in formCopy) {
      if (type === 'Login') {
        // LOGIN
        if (key !== 'confirmPassword') {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit = formCopy[key].value;
        }
      } else {
        //REGISTER
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
      if(key ==='Register'){
        isFormValid = isFormValid && formCopy[key].valid // check temp bool against state value 
        formToSubmit[key] = formCopy[key].value // add the datato the form to submit 
      }
    }


    if (isFormValid) {
      if (type === 'Login') {
        //submit Login
      } else {
        //submit register
       
    } else {
      this.setState({
        hasErrors: true
      });
    }
  };

  render() {
    return (
      <View>
        <Input
          placeholder="Enter Email"
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

        <View>
          <View style={{ marginTop: 7 }}>
            <TouchableOpacity
              style={styles.submitBtnAttr}
              onPress={this.submitUser}
              underlayColor="#fff"
            >
              <Text style={styles.loginText}>{this.state.action}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{ marginTop: 15 }}>
          <View style={styles.regBlueBtn}>
            <TouchableOpacity
              title={this.state.action}
              onPress={this.submitUser}
              // color={'#2196F3'}
            >
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        <View style={{ marginTop: 15 }}>
          <View style={styles.regBlueBtn}>
            <TouchableOpacity
              // title={this.state.actionMode}
              onPress={this.changeFormType}
              // color={'#1A73E8'}
            >
              <Text style={styles.loginText}>{this.state.actionMode}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <View style={styles.regBlueBtn}>
            <TouchableOpacity
              // title={this.state.actionMode}
              onPress={() => this.props.goNext()}
              // color={'#1A73E8'}
            >
              <Text style={styles.loginText}>I'll do it later</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    backgroundColor: 'red',
    marginBottom: 10,
    marginTop: 10,
    padding: 10
  },
  errorLabel: {
    color: '#FFF',
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  submitBtnAttr: {
    ...Platform.select({
      ios: {
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#1A73E8',
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 7,
        paddingBottom: 7,
        borderColor: '#1A73E8',
        borderRadius: 3,
        borderWidth: 3
      },
      android: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#1A73E8',
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#1A73E8'
      }
    })
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },
  regBlueBtn: {
    marginRight: 40,
    marginLeft: 40,
    // marginBottom: 20,
    marginTop: 0,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#2196F3',
    backgroundColor: '#2196F3',
    fontSize: 20
  }
});
export default AuthForm;
