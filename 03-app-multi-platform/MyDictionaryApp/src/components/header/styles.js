import { ScaledSheet } from 'react-native-size-matters';
import palette from '../../theme/palette';

export const styles = ScaledSheet.create( {
	container: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	fontSize: {
		fontSize: '34@ms',
		color: palette.white
	},
	fontWeight: {
	  fontWeight: 'bold'
	}
} );
