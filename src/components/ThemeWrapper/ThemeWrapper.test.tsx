import React from 'react';
import { ThemeWrapper } from '.';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('ThemeWrapper', () => {
	test('renders children', () => {
		const ChildComponent = (): React.ReactElement => <div>ChildComponent</div>;
		const { getByText } = render(
			<ThemeWrapper>
				<ChildComponent />
			</ThemeWrapper>,
		);

		expect(getByText('ChildComponent')).toBeInTheDocument();
	});
});
