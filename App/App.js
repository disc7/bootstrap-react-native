import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import api from './components/data/api.js';
import TinderCards from './components/tinder/Tinder.js';
import { Font } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      value: '',
      jokes: []
    }
  }

  async componentWillMount() {
    data = api.fetchData().then(function(data){
      this.setState({jokes: data})
    }.bind(this));
  }

  async componentDidMount() {
    await Font.loadAsync({
      'droid-sans-bold': require('./assets/fonts/DroidSans-Bold.ttf'),
      'droid-sans': require('./assets/fonts/DroidSans-Regular.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxTop}>
          {
            this.state.fontsLoaded ? <Text style={styles.textTitleBold}>DAD JOKES <Text style={styles.textTitle}>APP</Text></Text> : null
          }
        </View>
        <View style={styles.boxMiddle}>
          <TinderCards
            jokes={this.state.jokes}
          />
        </View>
        <View style={styles.boxBottom}>
          <View style={styles.boxBottomContainer}>
            <TouchableHighlight onPress={this.handlePress} style={styles.buttonHighlight}>
              <View style={styles.button1} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this.handlePress} style={styles.buttonHighlight}>
              <View style={styles.button2} />
            </TouchableHighlight>
            <TouchableHighlight onPress={this.handlePress} style={styles.buttonHighlight}>
              <View style={styles.button3} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }

  handlePress() {
    console.log('handlePress')
  }
}

let cicleButtonLargeSize = 50;
let cicleButtonSmallSize = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'stretch',
  },
  boxTop: {
    flex: 0,
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    backgroundColor: 'powderblue',
  },
  boxMiddle: {
    flex: 1,
    backgroundColor: 'white',
  },
  boxBottom: {
    flex: 0,
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  boxBottomContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 90,
    width: 220,
  },
  buttonHighlight: {
   borderRadius: cicleButtonLargeSize/2,
  },
  button1: {
    width: cicleButtonLargeSize,
    height: cicleButtonLargeSize,
    borderRadius: cicleButtonLargeSize/2,
    borderColor: 'gainsboro',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  button2: {
    width: cicleButtonSmallSize,
    height: cicleButtonSmallSize,
    borderRadius: cicleButtonSmallSize/2,
    borderColor: 'gainsboro',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  button3: {
    width: cicleButtonLargeSize,
    height: cicleButtonLargeSize,
    borderRadius: cicleButtonLargeSize/2,
    borderColor: 'gainsboro',
    borderWidth: 2,
    backgroundColor: 'white',
  },
  textTitleBold: {
    fontFamily: 'droid-sans-bold',
    fontSize: 20,
  },
  textTitle: {
    fontFamily: 'droid-sans',
    fontSize: 20,
  }
});
