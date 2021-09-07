import React, { ReactElement } from 'react';
import { ThemeProvider, createUseStyles, useTheme, DefaultTheme } from 'react-jss';
import { theme, Mytheme } from '../../theme';

const useStyles = createUseStyles((theme: Mytheme) => ({
	test: {
		backgroundColor: theme.colorPrimary,
		color: theme.textPrimary,
	},
}));

export const Bar = (): ReactElement => {
	const theme = useTheme();
	return (
		<ThemeProvider theme={theme}>
			<div className="test">bar</div>
		</ThemeProvider>
	);
};
