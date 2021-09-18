import { Meta } from '@storybook/react';
import React, { ReactElement } from 'react';
import { GridRepeat } from '.';
import { ThemeDecorator } from '../../../decorators';

const numberOfGridItems = new Array(100).fill(0);

const Content: ReactElement[] = numberOfGridItems.map((e, i, src) => (
	<div style={{ background: 'lightblue', height: 40 }} key={src.indexOf(e)}>
		Lorem
	</div>
));
export const Default = (): React.ReactElement => <GridRepeat content={Content} width={100} />;
export const CustomGap = (): React.ReactElement => <GridRepeat content={Content} width={200} gap={20} />;

export default {
	title: 'Layouts/Grid Repeat',
	component: GridRepeat,
	decorators: [ThemeDecorator],
} as Meta;
