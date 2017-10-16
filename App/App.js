import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import Input from './components/input/Input.js';
import TinderCards from './components/tinder/Tinder.js';

export default class App extends React.Component {
  state = {
    value: '',
    jokes: []
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxTop} />
        <View style={styles.boxMiddle} />
        <View style={styles.boxBottom} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  boxTop: {
    flex: 1,
    flexShrink: 1,
    backgroundColor: 'powderblue',
  },
  boxMiddle: {
    flex: 2,
    flexGrow: 1,
    backgroundColor: 'skyblue',
  },
  boxBottom: {
    flex: 3,
    flexShrink: 1,
    backgroundColor: 'steelblue',
  }
});
