import { createUseStyles, DefaultTheme } from 'react-jss';

// export const useStyles = createUseStyles({
// 	'@global': {
// 		body: {
// 			color: 'green',
// 		},
// 		a: {
// 			textDecoration: 'underline',
// 		},
// 	},
// });

export interface Mytheme {
	colorPrimary: string;
	colorSecondary: string;
	textPrimary: string;
}

export const theme: Mytheme = {
	colorPrimary: 'green',
	colorSecondary: 'blue',
	textPrimary: '#ccc',
};
