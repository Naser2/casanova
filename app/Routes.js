import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import SignIn from './components/auth';
import CasanovaSettings from './components/messages_settings';
import Feed from './components/feed';

const AuthStack = createStackNavigator(
  {
    SignIn: SignIn
  },
  {
    headerMode: 'none '
  }
);
const AppStack = createBottomTabNavigator({
  Feed: Feed,
  CasanovaSettings: CasanovaSettings
});
export const RoutesNavigator = () => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack
      },
      {
        initialRouteName: 'Auth'
      }
    )
  );
};

export default RoutesNavigator;
