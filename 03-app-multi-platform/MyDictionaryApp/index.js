/** @format */

import React from 'react';
import {AppRegistry, SafeAreaView, View} from 'react-native';
import App from './src/router';
import Colors from './src/config/colors'

class Index extends React.Component {
  render() {
    return (
    	<SafeAreaView style={{ backgroundColor: Colors.background, flex: 1 }}>
	    	<View style={{flex: 1}}>
	    		<App/>
	    	</View>					
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('MyDictionaryApp', () => Index);
