import { render, RenderOptions, RenderResult } from '@testing-library/react';
import React, { PropsWithChildren, ReactElement } from 'react';
import { ThemeWrapper } from './src/components/ThemeWrapper';
// import { TranslationProvider } from 'my-i18n-lib';
// import defaultStrings from 'i18n/en-x-default';

const AllTheProviders = ({ children }: PropsWithChildren<{}>): React.ReactElement => {
	return <ThemeWrapper>{children}</ThemeWrapper>;
};

const customRender = (ui: ReactElement, options?: RenderOptions): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
