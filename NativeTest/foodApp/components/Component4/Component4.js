import React, {Component} from 'react';
import {AppRegistry, Text, View, ListView} from 'react-native';

const users = [
  {name: 'John Doe'},
  {name: 'Brad Traversy'},
  {name: 'Whatever'},
  {name: 'MEMEMEMEME'}
]

export default class Component4 extends Component {
  render(){
    return(
      <View>
        <Text>Component4</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Component4',()=> Component4)
