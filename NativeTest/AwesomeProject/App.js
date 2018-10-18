import React from 'react';
import PropTypes from 'prop-types';
import {Button, NavigatorIOS, Text, View} from 'react-native';

export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scenes',
          passProps: {index: 1},
        }}
        style={{flex: 1}}
      />
    );
  }
}

class MyScene extends React.Component {
  static propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    navigator: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }

  _onForward() {
    let nextIndex = ++this.props.index;
    this.props.navigator.push({
      component: MyScene,
      title: 'Scene ' + nextIndex,
      passProps: {index: nextIndex},
    });
  }

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <Button
          onPress={this._onForward}
          title="Tap me to load the next scene"
        />
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

// import React, { Component } from 'react';
// import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
//
// export default class Touchables extends Component {
//   _onPressButton() {
//     Alert.alert('You tapped the button!')
//   }
//
//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }
//
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableHighlight</Text>
//           </View>
//         </TouchableHighlight>
//         <TouchableOpacity onPress={this._onPressButton}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableOpacity</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableNativeFeedback
//             onPress={this._onPressButton}
//             background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableWithoutFeedback
//             onPress={this._onPressButton}
//             >
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
//           </View>
//         </TouchableWithoutFeedback>
//         <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
//           <View style={styles.button}>
//             <Text style={styles.buttonText}>Touchable with Long Press</Text>
//           </View>
//         </TouchableHighlight>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// });

// skip this line if using Create React Native App



// Changing user textinput as a 🍕 emoji.
// export default class PizzaTranslator extends Component {
//   constructor(props){
//     super(props);
//     this.state = {text: ''};
//   }
//
//   render(){
//     return (
//       <View style={{padding: 10}}>
//         <TextInput
//           style={{height:40}}
//           placeholder="Type here to translate!"
//           onChangeText={(text) => this.setState({text})}
//         />
//         <Text style={{padding: 10, fontSize: 42}}>
//           {this.state.text.split(' ').map((word)=> word&&'🍕').join(' ')}
//         </Text>
//       </View>
//     );
//   }
// }

//For styling flex boxes
// export default class AlignItemBasics extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'stretch',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//         <View style={{height: 50, backgroundColor: 'skyblue'}}/>
//         <View style={{height: 100, backgroundColor: 'steelblue'}}/>
//       </View>
//     )
//   }
// }

// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}/>
//       </View>
//     )
//   }
// }


// For flex demension styling
// export default class FlexDimensionsBasics extends Component {
//   render() {
//     return(
//       <View style={{flex: 1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}}/>
//         <View style={{flex: 2, backgroundColor: 'skyblue'}}/>
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }


// For fixed styling
// export default class FixedDimensionsBasics extends Component {
//   render() {
//     return (
//       <View>
//         <View style ={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
//         <View style ={{width: 100, height: 100, backgroundColor: 'skyblue'}}/>
//         <View style ={{width: 150, height: 150, backgroundColor: 'steelblue'}}/>
//       </View>
//     );
//   }
// }


// For text styling
// export default class LotsOfStyles extends Component {
//   render() {
//     return (
//       <View>
//         <Text style={styles.red}>Just a red text</Text>
//         <Text style={styles.bigblue}>just bigblue</Text>
//         <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//         <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// For blinking text
// class Blink extends Component {
//   constructor(props){
//     super(props);
//     this.state = {isShowingText:true};
//     setInterval(()=>{
//       this.setState(previousState => {
//         return { isShowingText: !previousState.isShowingText };
//       });
//     }, 1000);
//   }

//   render() {
//     let display = this.state.isShowingText ? this.props.text : ' ';
//     return (
//       <Text>{display}</Text>
//     );
//   }
// }

// export default class BlinkApp extends Component {
//   render(){
//     return (
//       <View>
//         <Blink text = "I love to blink"/>
//         <Blink text = "Of course dude"/>
//         <Blink text = "Who would've thought you can do this"/>
//         <Blink text = "Without using html smh"/>

//       </View>
//     )
//   }
// }
