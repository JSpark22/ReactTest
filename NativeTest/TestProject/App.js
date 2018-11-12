import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import DivideScreen from './screens/DivideScreen.js';


const App = createStackNavigator({
  Home: { screen: HomeScreen },
  DivideScreen: { screen: DivideScreen },
});

export default App;
