/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  state = {
    searchValue: 'uselesss',
  }

  render() {
    const { searchValue } = this.state
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>DICTIO</Text>
          <Text style={styles.instructions}>NARY</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={(searchValue) => this.setState({searchValue})}
          value={searchValue}
        />
        <TouchableOpacity onPress={() => console.log('you can do it Diego')}>
          <Text style={styles.instructions}>You can do it</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
