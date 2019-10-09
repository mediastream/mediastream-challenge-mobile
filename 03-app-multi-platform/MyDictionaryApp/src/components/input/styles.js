import { ScaledSheet } from 'react-native-size-matters';
import palette from '../../theme/palette';

export const styles = ScaledSheet.create( {
	container: {
		height: '50@ms',
		borderRadius: '30@ms',
		justifyContent: 'center',
		backgroundColor: palette.white
	},
	input: {
		height: '50@ms',
		marginHorizontal: '10@ms',
		color: palette.pink
	}
} );
