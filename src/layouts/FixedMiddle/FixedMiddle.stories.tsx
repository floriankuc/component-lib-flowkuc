import { Meta } from '@storybook/react';
import React, { ReactElement } from 'react';
import { FixedMiddle } from '.';
import { ThemeDecorator } from '../../../decorators';

const createComponent = (bg: string): ReactElement => <div style={{ backgroundColor: bg, height: 200, border: '1px solid #000' }} />;

const component = createComponent('lightblue');

export const Default = (): React.ReactElement => (
	<div style={{ border: '1px dashed #000' }}>
		<FixedMiddle component={component} />
	</div>
);

export default {
	title: 'Layouts/Fixed Middle',
	component: FixedMiddle,
	decorators: [ThemeDecorator],
} as Meta;
