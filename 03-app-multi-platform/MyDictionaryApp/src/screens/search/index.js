import React, { Component } from 'react';
import {
	View, KeyboardAvoidingView, Platform, ScrollView, ActivityIndicator, Text
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/header';
import { searchStyle } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';
import palette from '../../theme/palette';
import { actSearch } from '../../actions/search';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			searchText: ''
		};
		this._onChange = this._onChange.bind( this );
		this._search = this._search.bind( this );
	}

	_onChange( text ) {
		this.setState( { searchText: text } );
	}

	async _search() {
		const { search, componentId } = this.props;
		const { searchText } = this.state;
		if ( searchText === '' ) {
			return;
		}
		search( searchText, componentId );
	}

	render() {
	    const { searchText } = this.state;
	    const { loading } = this.props;

		return (
			<LinearGradient colors={[ '#df2cf2', '#5718dc' ]} style={{ flex: 1 }}>
				<KeyboardAvoidingView style={searchStyle.avoidingView} behavior={Platform.OS === 'ios' ? 'padding' : ''}>
					<Header />
					{ loading ? (
						<View style={searchStyle.loadingContainer}>
							<ActivityIndicator size="large" color={palette.pink} />
							<Text style={searchStyle.loadingText}>FINDING...</Text>
						</View>
					) : (
						<ScrollView style={searchStyle.container}>
							<View style={searchStyle.body}>
								<View style={searchStyle.form}>
									<Input
										value={searchText}
										onChange={this._onChange}
										placeholder="Write some words, example: Dog Gat"
									/>
								</View>
								<View style={searchStyle.buttonContainer}>
									<Button
										text="FIND"
										action={this._search}
									/>
								</View>
							</View>
						</ScrollView>
					)}
				</KeyboardAvoidingView>
			</LinearGradient>

		);
	}
}

Search.defaultProps = {
	componentId: '',
	loading: false,
	search: () => {}
};

Search.propTypes = {
	componentId: PropTypes.any,
	loading: PropTypes.bool,
	search: PropTypes.any
};

const mapDispatchToProps = dispatch => bindActionCreators( { search: actSearch }, dispatch );
const mapStateToProps = state => ( {
	loading: state.words.searching
} );

export default connect( mapStateToProps, mapDispatchToProps )( Search );
