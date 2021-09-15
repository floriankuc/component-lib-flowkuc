import { css } from 'styled-components';

export const mixins = {
	link: css`
		&:hover,
		&:active,
		&:focus {
			outline: 0;
			cursor: pointer;
		}
	`,
};
