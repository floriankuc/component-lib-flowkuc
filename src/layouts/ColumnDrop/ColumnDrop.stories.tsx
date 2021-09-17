import { Meta } from '@storybook/react';
import React, { ReactElement } from 'react';
import { ColumnDrop } from '.';
import { ThemeDecorator } from '../../../decorators';

const createComponent = (bg: string): ReactElement => <div style={{ backgroundColor: bg, height: 200 }} />;

const LeftComponent = createComponent('lightblue');
const MidComponent = createComponent('orange');
const RightComponent = createComponent('pink');

export const Default = (): React.ReactElement => <ColumnDrop left={LeftComponent} mid={MidComponent} right={RightComponent} />;
export const CustomBreakpoints = (): React.ReactElement => (
	<ColumnDrop left={LeftComponent} mid={MidComponent} right={RightComponent} breakpoints={[1000, 1300]} />
);

export default {
	title: 'Layouts/Column Drop',
	component: ColumnDrop,
	decorators: [ThemeDecorator],
} as Meta;
