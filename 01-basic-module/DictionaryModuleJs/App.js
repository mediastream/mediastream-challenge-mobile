/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, ActivityIndicator} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters'
import fetchJsonp from 'fetch-jsonp'

type Props = {};
export default class App extends Component<Props> {
  state = {
    searchValue: 'apple',
    description: {},
    isLoading: false,
  }

  searchWord = async () => {
    const { searchValue } = this.state
    console.log( 'searchWord > searchValue', searchValue )
    const wordDescriptionUrl = `http://api.urbandictionary.com/v0/define?term=${searchValue}`
    this.setState( {
      isLoading: true,
    } )
    // flickr picture endpoint returns JSONP format which is not valid for mobile apps
    // const wordPictureUrl = https://api.flickr.com/services/feeds/photos_public.gne?tags=${searchValue}&tagmode=any&format=json`
    const description = await await fetch( wordDescriptionUrl )
    .then( rawResponse => rawResponse.json() )
    .catch( error => console.log( error ) )
    console.log( 'description', description )
    this.setState( {
      description: description.list[0],
      isLoading: false,
    } )
  }

  makeRequest = async ( url ) => {
    const config = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
    return 
  }

  render() {
    const { searchValue, isLoading, description } = this.state
    return (
      <>
        <SafeAreaView style={styles.topContainer}/>
        <StatusBar backgroundColor='#D928FB' barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <LinearGradient
            colors={['#D928FB', '#4D0EE5']}
            style={styles.linearGradient}
          >
            <Text style={styles.titleRegular}>DICTIO<Text style={styles.bold}>NARY</Text></Text>
            {
              isLoading ?
                <ActivityIndicator color="#D928FB" size="large"/>
                :
                <>
                  {
                    description.definition ?
                      (
                        <View style={styles.controlsContainer}>
                          <Text style={styles.titleRegular}> {searchValue} </Text>
                          <Text style={styles.regular}> {description.definition} </Text>
                        </View>
                      ) :
                      (
                        <View style={styles.controlsContainer}>
                          <View style={styles.inputContainer}>
                            <Text style={styles.regular}> Write a word </Text>
                            <TextInput
                              style={styles.input}
                              onChangeText={searchValue => this.setState({searchValue})}
                              value={searchValue}
                              placeholder="Search online"
                            />
                          </View>
                          <TouchableOpacity onPress={() => this.searchWord()} style={styles.button}>
                            <Text style={styles.regular}>
                              FIND
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )
                  }
                </>
            }
            {
              description.definition
                ? (
                  <TouchableOpacity onPress={() => this.setState({ description: {} })} style={styles.button}>
                    <Text style={styles.regular}>
                      BACK
                    </Text>
                  </TouchableOpacity>
                )
                : <View/>
            }
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
    height: verticalScale( 40 ),
    width: '100%',
    borderRadius: verticalScale( 20 ),
    marginTop: verticalScale( 5 ),
    paddingHorizontal: scale( 10 ),
    backgroundColor: '#ffffff',
    borderColor: 'black',
    color: '#D928FB',
    fontSize: scale( 18 ),
  },
  button: {
    backgroundColor: '#D928FB',
    height: verticalScale( 40 ),
    width: '80%',
    borderRadius: verticalScale( 20 ),
    paddingHorizontal: scale( 10 ),
    marginTop: verticalScale( 30 ),
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlsContainer: {
    width: '100%',
    alignItems: 'center'
  },
  inputContainer: {
    width: '90%',
    borderRadius: 30,
  },
  bold: {
    fontWeight: 'bold',
  },
  titleRegular: {
    fontSize: scale( 30 ),
    color: '#ffffff',
  },
  regular: {
    fontSize: scale( 18 ),
    color: '#ffffff',
  },
  linearGradient: {
    flex: 1,
    paddingVertical: verticalScale( 5 ),
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
