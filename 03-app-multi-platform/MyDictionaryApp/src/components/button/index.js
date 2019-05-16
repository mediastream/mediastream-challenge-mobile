import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Button = ( { action, text } ) => (
	<TouchableWithoutFeedback onPress={action}>
		<View style={[ styles.container ]}>
			<Text style={styles.text}>{text}</Text>
		</View>
	</TouchableWithoutFeedback>
);

Button.propTypes = {
	action: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired
};

export default Button;
