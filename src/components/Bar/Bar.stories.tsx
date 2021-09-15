import { Meta } from '@storybook/react';
import React from 'react';
import { ActionItem, Bar } from '.';
import { ScrollingDecorator, ThemeDecorator } from '../../../decorators';
import { mockActionItems } from '../../../mocks';

const actionItems: ActionItem[] = [...mockActionItems, ...mockActionItems, ...mockActionItems];

export const Default = (): React.ReactElement => <Bar actionItems={actionItems} />;
export const AlignLeft = (): React.ReactElement => <Bar align="left" actionItems={actionItems} />;
export const AlignCenter = (): React.ReactElement => <Bar align="center" actionItems={actionItems} />;
export const Sticky = (): React.ReactElement => <Bar sticky actionItems={actionItems} />;
Sticky.decorators = [ScrollingDecorator];

export default {
	title: 'Bar',
	component: Bar,
	decorators: [ThemeDecorator],
} as Meta;
