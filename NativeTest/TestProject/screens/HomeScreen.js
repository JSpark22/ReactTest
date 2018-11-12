import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet,Button } from 'react-native';


const textStyles = StyleSheet.create({
  bigblue: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
  }
})
export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {text: ' ', firstnumber:0, secondnumber:0, sum:0};
  }
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <View style = {{backgroundColor: 'powderblue'}}>
        <Text style={textStyles.bigblue}>This page will add two number</Text>
        <TextInput
        placeholder = "First Number"
        style = {{height: 40}}
        onChangeText={(firstnumber)=>this.setState({firstnumber})}
        />
        <TextInput
        placeholder = "Second Number"
        style = {{height: 40}}
        onChangeText={(secondnumber)=>this.setState({secondnumber})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {parseInt(this.state.firstnumber) + parseInt(this.state.secondnumber)}
        </Text>
        </View>
        <Button
        title="Go to divide"
        onPress={() =>
          navigate('DivideScreen', { name: 'DivideScreen' })
        }
      />
      </View>
    );
  }
}
