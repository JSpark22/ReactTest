import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Home from './screens/Home'


export default class foodApp extends Component {
  render(){
    return(
      <View>
        <Text>Hello Sirs</Text>
        <Home />

      </View>
    );
  }
}

AppRegistry.registerComponent('foodApp',()=> foodApp)
