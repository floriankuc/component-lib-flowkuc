import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	myButton: {
		color: 'green',
		margin: {
			top: 5,
			right: 0,
			bottom: 0,
			left: '1rem',
		},
		'& span': {
			fontWeight: 'bold',
		},
	},
	myLabel: {
		fontStyle: 'italic',
	},
});

export interface ButtonProps {
	title?: string;
}

export const Button = (props: ButtonProps): React.ReactElement => {
	const classes = useStyles();
	return (
		<button className={classes.myButton}>
			<span className={classes.myLabel}>{props.title || 'Test'}</span>
		</button>
	);
};
