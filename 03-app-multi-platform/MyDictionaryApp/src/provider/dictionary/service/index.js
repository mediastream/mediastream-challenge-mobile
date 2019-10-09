import DictionaryModel from '../model';

class DictionaryService {
	static async getImage( w ) {
		const {
			success: successImage, data: Image
		} = await DictionaryModel.getPublicImage( w );
		if ( successImage ) {
			if ( Image.items.length > 0 ) {
				return Image.items[ 0 ];
			}
		}
		return '';
	}

	static async getWordsInfo( words ) {
	    let result = [];
	    const wordsArray = words.split( ' ' );
		const wordsFiltered = wordsArray.filter( w => w !== '' );
		try {
		    for ( let w of wordsFiltered ) {
				let send = {
					image: {},
					info: {}
				};

				const {
					success, error, errorM, data
				} = await DictionaryModel.get( w );

				const {
					success: successImage, data: Image
				} = await DictionaryModel.getPublicImage( w );

				if ( !success ) {
					if ( error ) {
						console.log( 'errorM', errorM );
					}
					return;
				}
				if ( data.list.length === 0 ) {
					return;
				}

				send = { info: data.list[ 0 ] };


				if ( successImage ) {
					if ( Image.items.length > 0 ) {
						send = { image: Image.items[ 0 ], ...send };
					}
				}
				result.push( send );
			}
		} catch ( e ) {
			console.log( 'error', e );
		}
		return result;
	}
}

export default DictionaryService;
