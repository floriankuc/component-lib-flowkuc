import { StoryFnReactReturnType } from '@storybook/react/dist/ts3.9/client/preview/types';
import React from 'react';
import { ThemeWrapper } from './src/components/ThemeWrapper';

export const ThemeDecorator = (Story: () => StoryFnReactReturnType): StoryFnReactReturnType => (
	<ThemeWrapper>
		<Story />
	</ThemeWrapper>
);

export const ScrollingDecorator = (Story: () => StoryFnReactReturnType): StoryFnReactReturnType => (
	<div style={{ height: 2000 }}>
		<Story />
	</div>
);
