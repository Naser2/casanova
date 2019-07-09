import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import InfoOptions from './InfoOptions';
import InfoImg1 from './InfoImg1';

const NewbieInfo = () => {

  // ShowSettings = () => {
   
  //     this.props.navigation.navigate('Settings')
    
  // };

  return (
    <View style={styles.cardContainer}>
      <View>
        <InfoImg1 />
      </View>
      <View style={{ backgroundColor:'rgba(255, 245, 247, 1)', marginTop:5}}>
            <Text style={styles.titleCard}> How Casanova works </Text>
     </View>
      <View style={styles.contentCard}>
        <InfoOptions />
        <View style={{ marginTop: 15 }}>
          <View style={styles.regBlueBtn}>
            <TouchableOpacity onPress={this.props.ShowSettings}>
              <Text style={styles.loginText}> Get Started | Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    top: 10,
    backgroundColor: '#ffff',
    margin: 10
    // shadowColor: '#dddddd',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // elevation: 1,
    // borderRadius: 2
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
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },
  contentCard: {
    paddingTop: 20,
    borderWidth: 1,
    borderColor: '#ffff'
  },
  titleCard: {
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: '#232323',
    fontSize: 20,
    padding: 10
  },
  bottomCard: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    padding: 10
  },
  bottomCardTeam: {
    fontFamily: 'Roboto-Bold',
    color: '#828282',
    fontSize: 12
  },
  bottomCardText: {
    fontFamily: 'Roboto-Light',
    color: '#828282',
    fontSize: 12
  }
});

export default NewbieInfo;
