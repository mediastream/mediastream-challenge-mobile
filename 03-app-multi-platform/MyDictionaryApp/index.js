/** @format */


import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import axios from 'axios';
import { registerScreens } from './src/screens';
import getStore from './src/redux/store';

const store = getStore();
registerScreens( store, Provider );
Navigation.events().registerAppLaunchedListener( () => {
	 Navigation.setRoot( {
		root: {
			stack: {
				children: [ {
					component: {
						name: 'Search',
						options: {
							topBar: {
								visible: false,
								height: 0
							}
						}
					}
				} ]
			}
		}
	} );
} );

axios.interceptors.response.use( ( response ) => {
	const { status, data } = response;
	if ( status === 200 ) {
		return {
			error: false,
			success: true,
			data
		};
	}
	return {
		error: false,
		success: false,
		data
	};
}, error => ( {
	success: false,
	error: true,
	errorM: error
} ) );
