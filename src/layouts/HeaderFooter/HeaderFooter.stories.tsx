import { Meta } from '@storybook/react';
import React, { ReactElement } from 'react';
import { HeaderFooter } from '.';
import { ThemeDecorator } from '../../../decorators';

const createComponent = (bg: string, h?: number): ReactElement => <div style={{ backgroundColor: bg, height: h }} />;

const Header = createComponent('lightblue', 100);
const Content = (
	<div>
		<h1>{'Lorem '.repeat(200)}</h1>
	</div>
);
const Footer = createComponent('pink', 100);

export const Default = (): React.ReactElement => <HeaderFooter header={Header} content={Content} footer={Footer} />;

export default {
	title: 'Layouts/Header and Footer',
	component: HeaderFooter,
	decorators: [ThemeDecorator],
} as Meta;
