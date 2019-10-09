import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from '../reducers';

let middleware = [ thunk ];
if ( __DEV__ ) {
	const reduxInmmutableStateInvariant = require( 'redux-immutable-state-invariant' ).default();
	middleware = [ ...middleware, reduxInmmutableStateInvariant, logger ];
} else {
	middleware = [ ...middleware ];
}

// eslint-disable-next-line no-undef
export default Store = initialState => createStore(
	reducers,
	initialState,
	applyMiddleware( ...middleware )
);
