import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface IStretchedMiddle {
	sideWidth?: number;
	left: ReactNode;
	middle: ReactNode;
	right: ReactNode;
}

export interface IStyledSide {
	width: number;
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

/* width: ${({ width }): string => `${width}px`}; */

// .container {
//   display: flex;
// }

// .item {
//   height: 100px;
//   width: 100px; /* A fixed width as the default */
// }

// .item-center {
//   flex-grow: 1; /* Set the middle element to grow and stretch */
// }

// .item + .item {
//   margin-left: 2%;
// }

//layoutWrapper: flex, column
//header
//layoutmain { flex 1, overflowY scroll
//footer
///layoutwrapper
