import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '.';

export const Basic = (): React.ReactElement => {
	return <Button />;
};

export default {
	title: 'Basics',
	component: Button,
};
