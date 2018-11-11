import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';


export default class Home extends Component {
  render(){
    return(
      <View>
        <Text>This is a home screen</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Home',()=> Home)
