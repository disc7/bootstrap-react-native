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
        <Text style={styles.text}>{this.props.joke}</Text>
      </View>
    );
  }
}

export class NoMoreCards extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <Text style={styles.text}>More jokes tomorrow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: 340,
    maxWidth: 350,
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 3,
    justifyContent: 'center',
    // alignItems: 'flex-start',
    // alignItems: 'flex-end',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
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
