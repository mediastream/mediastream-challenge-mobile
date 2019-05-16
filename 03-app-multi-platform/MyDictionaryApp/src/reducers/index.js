import { combineReducers } from 'redux';
import * as search from './search';

export default combineReducers( Object.assign( {},
	search
) );
