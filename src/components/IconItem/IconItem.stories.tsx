import { Meta } from '@storybook/react';
import React from 'react';
import { IconItem } from '.';
import { ThemeDecorator } from '../../../decorators';
import { mockActionItems } from '../../../mocks';

const [actionItem] = mockActionItems;

export const Default = (): React.ReactElement => <IconItem actionItem={actionItem} />;
export const AlignLeft = (): React.ReactElement => <IconItem align="left" actionItem={actionItem} />;
export const AlignCenter = (): React.ReactElement => <IconItem align="center" actionItem={actionItem} />;

export default {
	title: 'IconItem',
	component: IconItem,
	decorators: [ThemeDecorator],
} as Meta;
