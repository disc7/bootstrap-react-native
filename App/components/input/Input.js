import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import customData from 'App/json/static_data.json';

export default class Input extends React.Component {
  fetchData() {
    this.props.updateJokes(customData.value)
    // fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
    // .then((response) => { return response.json()})
    // .then((data) => console.log('data:', data))
    // .then((data) => this.props.updateJokes(data.value))
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text style={styles.text}>Search</Text>
        </TouchableHighlight>
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
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#f00',
    borderWidth: 2,
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    width: 100,
    borderColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});
