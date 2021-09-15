import React from 'react';
import { IconItem } from '.';
import { mockActionItems, mockTitle } from '../../../mocks';
import { render } from '../../../testUtils';

describe('IconItem', () => {
	const [mockActionItem] = mockActionItems;

	it('uses align to set margin correctly', () => {
		const { container, rerender } = render(<IconItem actionItem={mockActionItem} />);
		const iconItem = container.querySelectorAll('div')[0];

		expect(getComputedStyle(iconItem).margin).toEqual('0px 0px 0px 20px');

		rerender(<IconItem actionItem={mockActionItem} align="center" />);
		expect(getComputedStyle(iconItem).margin).toEqual('0px 10px');

		rerender(<IconItem actionItem={mockActionItem} align="left" />);
		expect(getComputedStyle(iconItem).margin).toEqual('0px 20px 0px 0px');
	});

	it('displays icon and title', () => {
		const { container, getByText } = render(<IconItem actionItem={mockActionItem} />);

		expect(getByText(mockTitle)).toBeInTheDocument();
		expect(container.querySelector('svg')).toBeInTheDocument();
	});
});
