import { Navigation } from 'react-native-navigation';


export const pop = componentId => Navigation.pop( componentId );

export const goSearchResult = componentId => Navigation.push( componentId, {
	component: {
		name: 'SearchResult',
		options: {
			topBar: {
				visible: false
			}
		}
	}
} );
