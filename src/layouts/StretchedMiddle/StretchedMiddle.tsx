import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface IStretchedMiddle {
	sideWidth?: number;
	left: ReactNode;
	middle: ReactNode;
	right: ReactNode;
}

export interface IStyledSide {
	width: IStretchedMiddle['sideWidth'];
}

export const StretchedMiddle = ({ left, middle, right, sideWidth }: IStretchedMiddle): ReactElement => (
	<StyledContainer>
		<StyledSide width={sideWidth || 100}>{left}</StyledSide>
		<StyledMain>{middle}</StyledMain>
		<StyledSide width={sideWidth || 100}>{right}</StyledSide>
	</StyledContainer>
);

const StyledContainer = styled.div`
	display: flex;
`;

const StyledMain = styled.main`
	flex-grow: 1;
`;

const StyledSide = styled.aside<IStyledSide>`
	width: ${({ width }): string => `${width}px`};
`;
