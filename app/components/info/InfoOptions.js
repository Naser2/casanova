import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

const InfoOptions= () => {
  return (
      <View style={styles.infoTextContainer}>

         <View style={styles.contentCard}>

           <View style={{ marginTop: 5 }}>
            <Text style={styles.setting_instructions}> Select a contact </Text>
           </View>
            <View style={{ marginTop: 15 }}>
            <Text style={styles.setting_instructions}>Select message or cutomisze your own</Text>
            </View>
            <View style={{ marginTop: 15 }}>
            <Text style={styles.setting_instructions}>Chose days ana times to send message </Text>
            </View>

        </View>

      </View>
   
  );
};
const styles = StyleSheet.create({
  infoTextContainer: {
    backgroundColor: '#ffff',
    // marginTop: 10,
    marginBottom: 40,
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
  setting_instructions_BKG: {
    paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: '#232323',
    fontSize: 18,
    padding: 10
  },
  setting_instructions: {
    backgroundColor: 'rgb(247,174,32)',
    backgroundColor: 'rgb(249,201,57)',
    // backgroundColor:'rgb(33, 185, 211)',
    // paddingTop: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold',
    color: '#232323',
    fontSize: 18,
    padding: 10,
    borderRadius: 20,

     shadowColor: '#dddddd',
    shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
      // elevation: 1,

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

export default InfoOptions;
