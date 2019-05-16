import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { resultStyle } from './styles';

const Result = ( { info, image } ) => (
	<View style={resultStyle.container}>
		<View style={resultStyle.wordContainer}>
			<Text style={resultStyle.wordText}>
				{`${info.word}:`}
			</Text>
		</View>
		<View style={resultStyle.definitionContainer}>
			<Text style={resultStyle.definitionText}>{info.definition}</Text>
		</View>
		<View style={resultStyle.imageContainer}>
			<Image source={{ uri: image.media.m }} style={resultStyle.image} />
		</View>
	</View>
);

Result.propTypes = {
	info: PropTypes.any.isRequired,
	image: PropTypes.any.isRequired
};

export default Result;
