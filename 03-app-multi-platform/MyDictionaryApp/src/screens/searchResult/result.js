import React from 'react';
import {
	View, Text, Image, TouchableWithoutFeedback, ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { resultStyle } from './styles';
import asstes from '../../assets';

const Result = ( {
	info, image, player, loading
} ) => (
	<View style={resultStyle.container}>
		<View style={resultStyle.titleContainer}>

			<TouchableWithoutFeedback onPress={player}>
				<View style={resultStyle.wordContainer}>
					<Text style={resultStyle.wordText}>
						{`${info.word}:`}
					</Text>
				</View>
			</TouchableWithoutFeedback>
			{loading ? (
				<ActivityIndicator style={resultStyle.wordContainer} size="large" color="#ffffff" />
			) : (
				<TouchableWithoutFeedback onPress={player}>
					<View style={resultStyle.wordContainer}>

						<Image source={asstes.common.play} style={resultStyle.imagePlay} resizeMode="contain" />

					</View>
				</TouchableWithoutFeedback>
			)}
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
