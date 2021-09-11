import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme/theme';
import { GlobalStyles } from '../../theme/globalStyles';

export const ThemeWrapper = (props: PropsWithChildren<{}>): React.ReactElement => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{props.children}
		</ThemeProvider>
	);
};
