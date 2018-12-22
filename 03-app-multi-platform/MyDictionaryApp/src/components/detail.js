'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Share,
  NativeModules
} from 'react-native';
import Colors from '../config/colors'
import Header from '../components/commons/header'
var DictionaryProvider = NativeModules.DictionaryProvider;

var {height, width} = Dimensions.get('window')
const PlatformWidth = width
const PlatformHeight = height

class Detail extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	data: this.props.navigation.state.params.data,
	  	photo: ''
	  };
	}

	static navigationOptions = { header: null }

	componentDidMount() {
		DictionaryProvider.findPhoto(this.state.text).then((e) => {
	  	console.log('photo ', e)
	  	this.setState({photo: e.items[0].media.m})
	  })
	}

  render() {
    return (
      <View style={styles.content}>
      	<ScrollView 
      		style={styles.container}
      		showsVerticalScrollIndicator={false}
      		>
      		<Header/>
      		<View style={styles.bodyView}>
	      		<View style={styles.wordView}>
	      			<Text style={styles.wordText}>{this.state.data.word}</Text>      			
	      			<TouchableOpacity
			          style={styles.goBack}
			          onPress={() => {this.play()}}>
			          <Text style={styles.playIcon}>Play</Text>
							</TouchableOpacity>
	      		</View>
	      		<View style={styles.definitionView}>
	      			<Text style={styles.definitionText}>{this.state.data.definition}</Text>
	      		</View>
	      		<Image style={styles.imageView} source={{uri: this.state.photo}}/>
	      	</View>
	      	<View style={styles.buffer}></View>
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
  	Share.share({
	    message: this.state.data.definition,
	    url: this.state.data.permalink,
	    title: this.state.data.word
	  }, {
	    // Android only:
	    dialogTitle: 'compartir',
	    // iOS only:
	    excludedActivityTypes: [
	    ]
	  })
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
	},
	buffer: {
		height: 80
	}
});


export default Detail;