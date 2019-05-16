import { SEARCH, SEARCH_SUCCESS, SEARCH_ERROR } from './types';
import SearchService from '../provider/dictionary/service';
import { goSearchResult } from '../screens/navigation';

export const actSearch = ( words, componentId ) => async ( dispatch ) => {
	dispatch( {
		type: SEARCH
	} );
	try {
		const service = await SearchService.getWordsInfo( words.trim() );
		dispatch( {
			type: SEARCH_SUCCESS,
			payload: typeof service === 'undefined' ? [] : service
		} );
		goSearchResult( componentId );
	} catch ( e ) {
	    dispatch( {
			type: SEARCH_ERROR
		} );
		alert( `Dictonary \n${e.toString()}` );
	}
};
