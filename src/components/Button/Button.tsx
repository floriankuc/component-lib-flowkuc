import React from 'react';
import styled from 'styled-components';
import { ThemeWrapper } from '../ThemeWrapper';
import { media } from '../../theme/media';
export interface IButton {
	title?: string;
}

export const Button = (props: IButton): React.ReactElement => {
	return (
		<ThemeWrapper>
			<StyledButton>
				<span className={'classes.myLabel'}>{props.title || 'Test'}</span>
			</StyledButton>
		</ThemeWrapper>
	);
};

const StyledButton = styled.div`
	font-family: 'Montserrat';
	color: ${({ theme }): string => theme.button.color};
	${media.xs} {
		color: #f00;
	}
`;
