import {
	NativeEventEmitter, NativeModules, DeviceEventEmitter, Platform
} from 'react-native';

const { RNAudioPlayer } = NativeModules;


function preparePlayer( url, callback ) {
	let emitter = Platform.OS === 'ios' ? new NativeEventEmitter( RNAudioPlayer ) : DeviceEventEmitter;
	const listener = emitter.addListener( 'callback', data => callback( data ) );
	RNAudioPlayer.preparePlayer( url, callback );
	return listener;
}

function play( callback ) {
	RNAudioPlayer.play( callback );
}

function stop( callback ) {
	RNAudioPlayer.stop( callback );
}
module.exports = {
	preparePlayer,
	play,
	stop
};
