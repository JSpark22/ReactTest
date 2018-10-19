import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, Alert } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    handleClick = () => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }
    // setInterval(() => {
    //   this.setState(previousState => {
    //     return { isShowingText: !previousState.isShowingText };
    //   });
    // }, 100);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (

      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
        <Button
          onPress={() => {handleClick()}}
          title="Press Me"
        />
      </View>
    );
  }
}


// <View>
//   <Blink text='I love to blink' />
//   <Blink text='Yes blinking is so great' />
//   <Blink text='Why did they ever take this out of HTML' />
//   <Blink text='Look at me look at me look at me' />
//   <Button
//     onPress={() => {handleClick()}}
//     title="Press Me"
//   />
// </View>
