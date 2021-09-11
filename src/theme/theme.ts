import { DefaultTheme } from 'styled-components';
import { colors } from './colors';

export const theme: DefaultTheme = {
	primaryColor: '#0f0',
	secondaryColor: '#666',
	button: {
		color: colors.specialColor,
	},
};

export const darkTheme: DefaultTheme = {
	primaryColor: '#fff',
	secondaryColor: '#cacaca',
	button: {
		color: colors.specialColor,
	},
};
