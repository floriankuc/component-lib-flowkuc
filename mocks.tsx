import React from 'react';
import { ActionItem } from './src/components/Bar';
import { action } from '@storybook/addon-actions';

export const MockIcon = (): React.ReactElement => (
	<svg
		style={{ width: 24, height: 24 }}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		className="feather feather-star"
	>
		<title>Star</title>
		<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
	</svg>
);

export const mockTitle = 'mockTitle';
export const mockActionItems: ActionItem[] = [
	{
		id: 'star',
		displayNode: {
			icon: <MockIcon />,
			title: mockTitle,
		},
		actionFn: (item: ActionItem): void => action(item.id)(),
	},
];
