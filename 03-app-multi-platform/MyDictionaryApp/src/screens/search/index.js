/* eslint-disable max-len */
import React, { Component } from 'react';
import {
	requireNativeComponent, View
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actSearch, actSearchImage } from '../../actions/search';

const DictionaryView = requireNativeComponent( 'DictionaryView', null );

class Search extends Component {
	render() {
		const { search, componentId, searchImage } = this.props;
		return (
			<View style={{ flex: 1, borderWidth: 1 }}>
				<DictionaryView
					style={{ flex: 1 }}
					onData={( data ) => {
						if ( data ) {
							searchImage( data.nativeEvent.word );
							search( data.nativeEvent, componentId );
						}
					}}
				/>
			</View>
		);
	}
}

Search.defaultProps = {
	componentId: '',
	search: () => {},
	searchImage: () => {}
};

Search.propTypes = {
	componentId: PropTypes.any,
	search: PropTypes.any,
	searchImage: PropTypes.any
};

const mapDispatchToProps = dispatch => bindActionCreators( { search: actSearch, searchImage: actSearchImage }, dispatch );
const mapStateToProps = state => ( {
	loading: state.words.searching
} );

export default connect( mapStateToProps, mapDispatchToProps )( Search );
