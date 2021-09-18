import { Meta } from '@storybook/react';
import React, { ReactElement } from 'react';
import { StretchedMiddle } from '.';
import { ThemeDecorator } from '../../../decorators';

const createComponent = (bg: string): ReactElement => <div style={{ backgroundColor: bg, height: 200 }} />;

const LeftComponent = createComponent('lightblue');
const MidComponent = createComponent('orange');
const RightComponent = createComponent('pink');

export const Default = (): React.ReactElement => <StretchedMiddle left={LeftComponent} middle={MidComponent} right={RightComponent} />;

export default {
	title: 'Layouts/Stretched Middle',
	component: StretchedMiddle,
	decorators: [ThemeDecorator],
} as Meta;
