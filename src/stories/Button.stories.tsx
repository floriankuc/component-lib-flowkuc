import React from 'react';

import { Button } from './Button';

export default {
	title: 'Example/Button',
	component: Button,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

const Template = (): React.ReactElement => <Button />;

export const Primary = Template.bind({});
