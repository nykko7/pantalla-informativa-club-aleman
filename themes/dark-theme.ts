import { createTheme } from '@mui/material';
// import { orange, red } from '@mui/material/colors';

export const darkTheme = createTheme({
	palette: {
		mode: 'light',

		background: {
			default: '#f3f3f3',
		},
		// error: {
		// 	main: '#333',
		// },
	},

	components: {
		// MuiAppBar: {
		// 	defaultProps: {
		// 		elevation: 0,
		// 	},
		// 	styleOverrides: {
		// 		root: {
		// 			backgroundColor: '#4a148c',
		// 		},
		// 	},
		// },
	},
});
