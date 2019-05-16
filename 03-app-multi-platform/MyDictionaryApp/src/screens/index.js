import { Navigation } from 'react-native-navigation';
import Search from './search';
import SearchResult from './searchResult';

export function registerScreens( store, Provider ) {
	 Navigation.registerComponentWithRedux( 'Search', () => Search, Provider, store );
	 Navigation.registerComponentWithRedux( 'SearchResult', () => SearchResult, Provider, store );
}
