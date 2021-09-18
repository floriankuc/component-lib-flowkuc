import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface IFixedMiddle {
	width?: number;
	component: ReactNode;
}

export interface IStyledMain {
	width: number;
}

export const FixedMiddle = ({ width, component }: IFixedMiddle): ReactElement => (
	<StyledContainer>
		<StyledMain width={width || 1000}>{component}</StyledMain>
	</StyledContainer>
);

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`;

const StyledMain = styled.main<IStyledMain>`
	width: ${({ width }): string => `${width}px`};
`;
