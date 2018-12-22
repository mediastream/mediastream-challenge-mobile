'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import Colors from '../config/colors'
import Header from '../components/commons/header'
import {NativeModules} from 'react-native';
var DictionaryProvider = NativeModules.DictionaryProvider;

var {height, width} = Dimensions.get('window')
const PlatformWidth = width
const PlatformHeight = height

class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	text: '',
	  	isLoading: false
	  };
	}

	static navigationOptions = { header: null }  

  render() {
    return (
      <View style={styles.content}>      	
      	{this.state.isLoading &&
      		<View style={styles.indicatorView}>
      			<ActivityIndicator size="large" color="#0000ff" />
      		</View>      		
      	}
      	{!this.state.isLoading &&
      		<View>
      			<Header/>
	      	<View style={styles.container}>
	      		<View style={styles.inputView}>
	      			<Text style={styles.inputLabel}>Write a word</Text>
	      			<TextInput
				        style={styles.textInput}
				        onChangeText={(text) => this.setState({text})}
				        value={this.state.text}
				      />
				      <TouchableOpacity
			          style={styles.searchButton}
			          onPress={() => {this.search()}}>
			          <Text style={styles.searchText}>FIND</Text>
							</TouchableOpacity>
	      		</View>
	      	</View> 
      		</View>      		
      	}      	     	
      </View>
    );
  }

  search() {
  	this.setState({isLoading: true})
  	DictionaryProvider.findTerms(this.state.text).then((e) => {
  		this.setState({isLoading: false})
  		console.log('term ', e.list[0])
  		if (e.list[0]) {
  			this.props.navigation.navigate('Detail', {
		  		data: e.list[0]
		  	})
  		}	else {
  			alert('No se encuentra la palabra en el diccionario')
  		}	
	  })	    
  }
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
	},
	inputLabel: {
		fontSize: 18,
		color: 'white',
		width: '100%'
	},
	inputView: {
		top: PlatformHeight * 0.15,
		backgroundColor: 'transparent',
		width: PlatformWidth,
		padding: 30,
		alignItems: 'center',
	},
	textInput: {
		width: PlatformWidth * 0.85,
		height: PlatformHeight * 0.080, 
		borderColor: 'white', 
		borderWidth: 1,
		borderRadius: (PlatformHeight * 0.080)/2,
		backgroundColor: 'white',
		marginTop: 10,
		paddingLeft: 20,
		paddingRight: 20,
		color: Colors.background,
		fontSize: 18
	},
	searchButton: {
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 30,
		width: PlatformWidth * 0.7,
		height: PlatformHeight * 0.080,
		borderRadius: (PlatformHeight * 0.080)/2,
	},
	searchText: {
		color: 'white',
		fontSize: 18
	},
	indicatorView: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.background,
	}
});


export default Home;