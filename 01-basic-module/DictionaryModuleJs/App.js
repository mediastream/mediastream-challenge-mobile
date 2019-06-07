/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

type Props = {};
export default class App extends Component<Props> {
  state = {
    searchValue: 'uselesss',
  }

  render() {
    const { searchValue } = this.state
    return (
      <>
        <SafeAreaView style={styles.topContainer}/>
        <StatusBar backgroundColor='#D928FB' barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <LinearGradient
            colors={['#D928FB', '#4D0EE5']}
            style={styles.linearGradient}
          >
            <View>
              <Text style={styles.regular}>DICTIO<Text style={styles.bold}>NARY</Text></Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(searchValue) => this.setState({searchValue})}
              value={searchValue}regular
            />
            <TouchableOpacity onPress={() => console.log('you can do it Diego')}>
              <Text style={styles.regular}>You can do it</Text>
            </TouchableOpacity>
          </LinearGradient>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4D0EE5',
  },
  topContainer: {
    flex: 0,
    backgroundColor: '#D928FB',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1
  },
  bold: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  regular: {
    textAlign: 'center',
    fontSize: 20,
    color: '#ffffff',
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  }
});
