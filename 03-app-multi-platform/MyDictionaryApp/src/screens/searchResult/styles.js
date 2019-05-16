import { ScaledSheet } from 'react-native-size-matters';
import palette from '../../theme/palette';

export const styles = ScaledSheet.create( {
	container: {
		flex: 1
	},
	footer: {
		borderWidth: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: '20@ms',
		height: '50@ms',
		alignItems: 'center'
	},
	backContainer: {
		borderWidth: 0,
		height: '20@ms',
		flexDirection: 'row',
		alignItems: 'center'
	},
	shareContainer: {
		borderWidth: 0,
		height: '20@ms',
		flexDirection: 'row',
		alignItems: 'center'
	},
	notFoundContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	notFoundText: {
		fontSize: '20@ms',
		color: palette.white
	},
	backIcon: {
		height: '20@ms',
		width: '20@ms'
	},
	backText: {
		fontSize: '12@ms',
		color: palette.white,
		fontWeight: 'bold',
		marginLeft: '5@ms'
	}

} );

export const resultStyle = ScaledSheet.create( {
	container: {
		flex: 1,
		borderWidth: 0,
		marginHorizontal: '10@ms'
	},
	wordContainer: {
		marginTop: '50@ms'
	},
	wordText: {
		fontSize: '30@ms',
		color: palette.white
	},
	definitionContainer: {
		borderWidth: 0,
		marginTop: '20@ms'
	},
	definitionText: {
		fontSize: '15@ms',
		textAlign: 'justify',
		color: palette.white
	},
	imageContainer: {
		borderWidth: 0,
		height: '200@ms',
		marginTop: '20@ms',
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		height: '200@ms',
		width: '200@ms'
	}

} );
