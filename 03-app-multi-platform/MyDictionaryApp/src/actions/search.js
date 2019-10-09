import {
	SEARCH, SEARCH_SUCCESS, SEARCH_ERROR, SEARCH_IMAGE
} from './types';
import { goSearchResult } from '../screens/navigation';
import Service from '../provider/dictionary/service';

export const actSearch = ( data, componentId ) => async ( dispatch ) => {
	dispatch( {
		type: SEARCH
	} );
	try {
		const { definition, sound, word } = data;
		dispatch( {
			type: SEARCH_SUCCESS,
			payload: { definition, sound: typeof sound !== 'undefined' ? sound : '', word }
		} );
		goSearchResult( componentId );
	} catch ( e ) {
	    dispatch( {
			type: SEARCH_ERROR
		} );
		alert( `Dictonary \n${e.toString()}` );
	}
};

export const actSearchImage = w => async ( dispatch ) => {
	dispatch( {
		type: SEARCH
	} );
	try {
		const imageUrl = await Service.getImage( w );
		dispatch( {
			type: SEARCH_IMAGE,
			payload: imageUrl
		} );
	} catch ( e ) {
		dispatch( {
			type: SEARCH_ERROR
		} );
	}
};
