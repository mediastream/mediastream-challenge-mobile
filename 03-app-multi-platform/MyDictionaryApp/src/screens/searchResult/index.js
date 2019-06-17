/* eslint-disable class-methods-use-this,no-console */
import React, { Component } from 'react';
import {
	View, ScrollView, TouchableWithoutFeedback, Text, Image, Share
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import Header from '../../components/header';
import Result from './result';
import { pop } from '../navigation';
import Assets from '../../assets';
import RnPlayer from '../../../lib/rnPlayer';

class SearchResult extends Component {
	constructor( props ) {
		super( props );
		this.state = { loading: false };
		this._back = this._back.bind( this );
		this._share = this._share.bind( this );
	}


	_back() {
    	const { componentId } = this.props;
    	pop( componentId );
	}

	async _share() {
		await Share.share( {
			message: 'No me dio tiempo :('
		} );
	}

	_player( info ) {
		if ( info.sound !== '' && typeof info.sound !== 'undefined' ) {
			const listener = RnPlayer.preparePlayer( info.sound, ( data ) => {
				this.setState( { loading: data.loading }, () => {
					if ( !data.loading ) {
						RnPlayer.play( ( ) => {
							console.log( 'play' );
						} );
						listener.remove();
					}
				} );
			} );
		}
	}

	render() {
		const { definition, searching, image } = this.props;
		const { loading } = this.state;

		return (
			<LinearGradient colors={[ '#df2cf2', '#5718dc' ]} style={{ flex: 1 }}>
				<ScrollView style={styles.container}>
					<Header />

					<Result
						info={definition}
						player={() => this._player( definition )}
						loading={loading}
						searching={searching}
						image={image}
					/>
					<View style={styles.footer}>
						<TouchableWithoutFeedback onPress={this._back}>
							<View style={styles.backContainer}>
								<Image source={Assets.common.leftArrow} style={styles.backIcon} />
								<Text style={styles.backText}>Back</Text>

							</View>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback onPress={this._share}>
							<View style={styles.shareContainer}>
								<Image source={Assets.common.share} style={styles.backIcon} />
								<Text style={styles.backText}>Share</Text>
							</View>
						</TouchableWithoutFeedback>
					</View>

				</ScrollView>
			</LinearGradient>
		);
	}
}

SearchResult.defaultProps = {
	componentId: '',
	definition: {}
};

SearchResult.propTypes = {
	componentId: PropTypes.any,
	definition: PropTypes.any
};

const mapStateToProps = state => ( {
	definition: state.words.payload,
	image: state.words.imageUrl,
	searching: state.words.searching
} );
export default connect( mapStateToProps )( SearchResult );
