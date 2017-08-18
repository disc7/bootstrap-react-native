import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          value={this.props.value}
          onChangeText={(text) => this.props.onChange(text)}
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
  },
  input: {
    height: 40,
    width: 300,
    borderColor: '#f00',
    borderWidth: 2,
  }
});
