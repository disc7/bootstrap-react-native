'use strict';

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

export default React.createClass({
  handleYup (event) {
    console.log(`Yup`)
  },
  handleNope (event) {
    console.log(`Nope`)
  },
  renderYup (event) {
    console.log(`renderYup ${event}`)
  },
  renderNope (event) {
    console.log(`renderNope: ${event}`)
  },
  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeData) => <Card joke={jokeData.joke} fontsLoaded={this.props.fontsLoaded} />}
        renderNoMoreCards={() => <NoMoreCards fontsLoaded={this.props.fontsLoaded} />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        renderYup={this.renderYup}
        renderNope={this.renderNope}
        showYup={false}
        showNope={false}
      />
    )
  }
})

export class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        { this.props.fontsLoaded ? <Text style={styles.text}>{this.props.joke}</Text> : null }
      </View>
    );
  }
}

export class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        { this.props.fontsLoaded ? <Text style={styles.text}>More dad jokes tomorrow...</Text> : null }
      </View>
    );
  }
}

let fontSizeAndLineHeight = 40
const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 340,
    height: 340,
    minWidth: 340,
    maxWidth: 350,
    borderRadius: 10,
    backgroundColor: '#247E7D',
    borderColor: '#216969',
    borderWidth: 3,
    justifyContent: 'center',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    // alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    fontFamily: 'superfruitFont',
    // textAlign: 'right',
    lineHeight: fontSizeAndLineHeight,
    textShadowRadius: 3,
    textShadowOffset: {
      width: 0,
      height: 3,
    },
    textShadowColor: '#163837',
    color: 'white',
    fontSize: fontSizeAndLineHeight,
    padding: 10,
  },
  noMoreCards: {
    flex: 1,
    borderRadius: 10,
    borderColor: 'red',
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
