import { DefaultTheme } from 'styled-components';
import { colors } from './colors';
import { mixins } from './mixins';

export const theme: DefaultTheme = {
	primaryColor: '#0f0',
	secondaryColor: '#666',
	button: {
		color: colors.specialColor,
	},
	mixins,
};

export const darkTheme: DefaultTheme = {
	primaryColor: '#fff',
	secondaryColor: '#cacaca',
	button: {
		color: colors.specialColor,
	},
	mixins,
};
