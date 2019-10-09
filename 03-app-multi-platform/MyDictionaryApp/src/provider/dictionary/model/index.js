import { http, dictionaryBase, publicImageBase } from '../../../api/ref';

class Dictionary {
	static get( word ) {
		return http( {
			method: 'GET',
			url: `${dictionaryBase}${word}`
		} );
	}

	static getPublicImage( word ) {
		return http( {
			method: 'GET',
			url: `${publicImageBase}${word}`
		} );
	}
}

export default Dictionary;
