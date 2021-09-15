import React from 'react';
import { Bar } from '.';
import { mockActionItems, mockTitle } from '../../../mocks';
import { injectCSSInJSStyles } from '../../../setupTests';
import { render } from '../../../testUtils';

describe('Bar', () => {
	it('renders items with icon and title', () => {
		const { container, getByText } = render(<Bar actionItems={mockActionItems} />);
		expect(container.querySelector('svg')).toBeInTheDocument();
		expect(getByText(mockTitle)).toBeInTheDocument();
	});

	it('processes alignments correctly', () => {
		injectCSSInJSStyles();
		const { container, rerender } = render(<Bar actionItems={mockActionItems} align="left" />);
		const bar = container.querySelectorAll('div')[0];

		expect(getComputedStyle(bar).justifyContent).toEqual('flex-start');

		rerender(<Bar actionItems={mockActionItems} align="center" />);
		expect(getComputedStyle(bar).justifyContent).toEqual('center');

		rerender(<Bar actionItems={mockActionItems} align="right" />);
		expect(getComputedStyle(bar).justifyContent).toEqual('flex-end');
	});

	it('processes sticky correctly', () => {
		injectCSSInJSStyles();
		const { container, rerender } = render(<Bar actionItems={mockActionItems} align="left" />);

		const bar = container.querySelectorAll('div')[0];
		expect(getComputedStyle(bar).position).toEqual('static');

		rerender(<Bar actionItems={mockActionItems} sticky />);
		expect(getComputedStyle(bar).position).toEqual('sticky');
	});
});
