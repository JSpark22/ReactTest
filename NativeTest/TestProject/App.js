import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
  bigblue: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
  }
})
export default class inputTaker extends Component {
  constructor(props){
    super(props);
    this.state = {text: ' ', number:0};
  }
  render() {
    return(
      <View>
        <View style = {{backgroundColor: 'powderblue'}}>
        <Text style={textStyles.bigblue}>This page will add two number</Text>
        <TextInput
        placeholder = "First Number"
        style = {{height: 40}}
        onChangeText={(text)=>this.setState({text})}
        />
        <TextInput
        placeholder = "Second Number"
        style = {{height: 40}}
        onChangeText={(text)=>this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.number}
        </Text>
        </View>
      </View>
    );
  }
}
