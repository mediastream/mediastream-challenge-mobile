'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.titleView}>
    		<Text style={styles.titleNormal}>
    			DICTIO
      		<Text style={styles.titleBold}>
      			NARY
      		</Text>
      	</Text>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	titleView: {
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 30
	},
	titleNormal: {
		fontSize: 33,
		color: 'white'
	},
	titleBold: {
		fontSize: 33,
		fontWeight: 'bold',
		color: 'white'
	},
});


export default Header;