import { SEARCH, SEARCH_ERROR, SEARCH_SUCCESS } from '../actions/types';
import CreateReducer from '../redux/createReducer';

const init = {
	searching: false,
	payload: {
	    info: [],
		image: []
	}
};

export const words = CreateReducer( init, {
	[ SEARCH ]( state ) {
		return { ...state, searching: true };
	},
	[ SEARCH_ERROR ]( state ) {
	    return { ...state, searching: false };
	},
	[ SEARCH_SUCCESS ]( state, action ) {
		return { ...state, searching: false, payload: action.payload };
	}
} );
