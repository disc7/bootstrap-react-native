import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
        <Input
          updateJokes={(jokes) => this.setState({jokes: jokes})}
          value={this.state.value}
          onChange={(value) => this.setState({value: value})}
        />
        <TinderCards
          jokes={this.state.jokes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
