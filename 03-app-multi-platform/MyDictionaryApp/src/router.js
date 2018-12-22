'use strict'
import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './components/home'
import DetailScreen from './components/detail'

/* Config default statusbar */
StatusBar.setBarStyle('light-content')

const AppStack = createStackNavigator({ 
	Home: HomeScreen,
	Detail: DetailScreen
})

export default createSwitchNavigator(
  { 
    AppStack
  },
  {
    initialRouteName: 'AppStack',
  }
);