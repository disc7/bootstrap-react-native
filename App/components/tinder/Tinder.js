'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

export default class TinderCards extends React.Component {
  handleLikeJoke() {
    console.log('Yep')
  }
  handleDoesntLikeJoke() {
    console.log('Nope')
  }
  render() {
    return (
      <SwipeCards
        cards={this.props.jokes}
        renderCard={(jokeObject) => <Card joke={jokeObject.joke} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleYep={this.handleLikeJoke}
        handleNope={this.handleDoesntLikeJoke}
        showYup={false}
        showNope={false}
      />
    );
  }
}

export class Card extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>{this.props.joke}</Text>
      </View>
    );
  }
}

export class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text>More jokes tomorrow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 300,
    height: 300,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  text: {
    fontSize: 40,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
