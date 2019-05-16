import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

const Header = ( ) => (
	<View style={styles.container}>
		<Text style={[ styles.fontSize ]}>DICTIO</Text>
		<Text style={[ styles.fontSize, styles.fontWeight ]}>NARY</Text>
	</View>
);

export default Header;
