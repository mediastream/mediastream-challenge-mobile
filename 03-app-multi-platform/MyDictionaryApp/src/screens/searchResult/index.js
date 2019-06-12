/* eslint-disable class-methods-use-this,no-console */
import React, { Component } from 'react';
import {
	View, FlatList, TouchableWithoutFeedback, Text, Image, Share
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
		if ( info.sound_urls.length > 0 ) {
			const listener = RnPlayer.preparePlayer( info.sound_urls[ 0 ], ( data ) => {
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
		const { words } = this.props;
		const { loading } = this.state;
		return (
			<LinearGradient colors={[ '#df2cf2', '#5718dc' ]} style={{ flex: 1 }}>
				<View style={styles.container}>
					<Header />
					{words.length > 0 ? (
						<FlatList
							extraData={this.state}
							data={words}
							renderItem={( { item } ) => {
								const { image, info } = item;
								return (
									<Result
										info={info}
										image={image}
										player={() => this._player( info )}
										loading={loading}
									/>
								);
							}}
							keyExtractor={( item, index ) => index.toString()}
						/>
					) : (
						<View style={styles.notFoundContainer}>
							<Text style={styles.notFoundText}>No results found</Text>
						</View>
					)}


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

				</View>
			</LinearGradient>
		);
	}
}

SearchResult.defaultProps = {
	componentId: '',
	words: []
};

SearchResult.propTypes = {
	componentId: PropTypes.any,
	words: PropTypes.array
};

const mapStateToProps = state => ( {
	words: state.words.payload
} );
export default connect( mapStateToProps )( SearchResult );
