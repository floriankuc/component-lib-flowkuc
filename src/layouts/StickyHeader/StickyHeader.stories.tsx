import { Meta } from '@storybook/react';
import React, { ReactElement } from 'react';
import { StickyHeader } from '.';
import { ThemeDecorator } from '../../../decorators';

const createComponent = (bg: string, h?: number): ReactElement => <div style={{ backgroundColor: bg, height: h }} />;

const Header = createComponent('lightblue', 100);
const Content = (
	<div>
		<h1>{'Lorem '.repeat(400)}</h1>
	</div>
);
export const Default = (): React.ReactElement => <StickyHeader header={Header} content={Content} />;

export default {
	title: 'Layouts/Sticky Header',
	component: StickyHeader,
	decorators: [ThemeDecorator],
} as Meta;
