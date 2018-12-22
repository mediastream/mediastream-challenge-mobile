'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import Colors from '../config/colors'
import Header from '../components/commons/header'

var {height, width} = Dimensions.get('window')
const PlatformWidth = width
const PlatformHeight = height

class Detail extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	word: 'Apple:'
	  };
	}

	static navigationOptions = { header: null }

  render() {
    return (
      <View style={styles.content}>
      	<ScrollView style={styles.container}>
      		<Header/>
      		<View style={styles.bodyView}>
	      		<View style={styles.wordView}>
	      			<Text style={styles.wordText}>{this.state.word}</Text>      			
	      			<TouchableOpacity
			          style={styles.goBack}
			          onPress={() => {this.play()}}>
			          <Text style={styles.playIcon}>Play</Text>
							</TouchableOpacity>
	      		</View>
	      		<View style={styles.definitionView}>
	      			<Text style={styles.definitionText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
	      		</View>
	      		<Image style={styles.imageView} source={{uri: "https://farm5.staticflickr.com/4843/32548582608_b328a8043f_m.jpg"}}/>
	      	</View>
      	</ScrollView>      	      	
      	<View style={styles.footerView}>
      		<TouchableOpacity
	          style={styles.goBack}
	          onPress={() => {this.props.navigation.goBack()}}>
	          <Text style={styles.backText}>BACK</Text>
					</TouchableOpacity>
					<TouchableOpacity
	          style={styles.goBack}
	          onPress={() => {this.share()}}>
	          <Text style={styles.backText}>SHARE</Text>
					</TouchableOpacity>
      	</View>      	
      </View>
    );
  }

  play() {

  }

  share() {

  }
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	container: {	
		marginLeft: 20,
		marginRight: 20
	},
	bodyView: {

	},
	contentContainerStyle: {
		alignItems: 'center',
	},
	footerView: {
		position: 'absolute',
		flexDirection: 'row',
		justifyContent: 'space-between',
		bottom: 0,
		width: PlatformWidth,
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 30,
		paddingRight: 30,
		backgroundColor: Colors.background,
	},
	goBack: {
	},
	backText: {
		color: 'white',
		fontSize: 18
	},
	wordView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	wordText: {
		color: 'white',
		fontSize: 40
	},
	playIcon: {
		color: 'white',
		fontSize: 18,
		padding: 20
	},
	definitionView: {
		marginTop: 10
	},
	definitionText: {
		color: 'white',
		fontSize: 18,
		textAlign: 'left',
	},
	imageView: {
		marginTop: 20,
		width: '100%',
    height: PlatformWidth * 0.6
	}
});


export default Detail;