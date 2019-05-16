import React from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

const Input = ( { value, onChange, placeholder } ) => (
	<View style={[ styles.container ]}>
		<TextInput
			value={value}
			onChangeText={onChange}
			style={[ styles.input ]}
			placeholder={placeholder}
		/>
	</View>
);

Input.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired
};

export default Input;
