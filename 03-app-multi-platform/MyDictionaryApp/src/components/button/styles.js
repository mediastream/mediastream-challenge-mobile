import { ScaledSheet } from 'react-native-size-matters';
import palette from '../../theme/palette';

export const styles = ScaledSheet.create( {
	container: {
		borderWidth: 0,
		height: '50@ms',
		borderRadius: '30@ms',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: palette.pink
	},
	text: {
	    color: palette.white,
		fontSize: '15@ms',
		fontWeight: 'bold'
	}
} );
