import { ScaledSheet } from 'react-native-size-matters';
import palette from '../../theme/palette';

export const searchStyle = ScaledSheet.create( {
	container: {
		flex: 1,
		marginHorizontal: '25@ms'
	},
	body: {
	    borderWidth: 0,
		flex: 1,
		marginTop: '150@ms'
	},
	form: {
		borderWidth: 0
	},
	avoidingView: {
	    flex: 1
	},
	buttonContainer: {
		marginHorizontal: '10@ms',
		marginVertical: '40@ms'
	},
	loadingContainer: {
		marginTop: '150@ms',
		justifyContent: 'center',
		alignItems: 'center'
	},
	loadingText: {
		color: palette.white,
		fontSize: '12@ms',
		marginTop: '10@ms'
	}
} );
