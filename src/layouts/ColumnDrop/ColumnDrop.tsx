import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export type Breakpoints = [string | number, string | number];

export interface IColumnDrop {
	left: ReactNode;
	mid: ReactNode;
	right: ReactNode;
	breakpoints?: Breakpoints;
}

//stories in layouts und components unterteilen
export const ColumnDrop = ({ left, mid, right, breakpoints }: IColumnDrop): ReactElement => {
	const DEFAULT_BREAKPOINTS: Breakpoints = [600, 1200];
	const sortBps = (bp = DEFAULT_BREAKPOINTS): Breakpoints => bp.sort((a, b) => +a - +b);

	return (
		<StyledContainer>
			<StyledLeft breakpoints={sortBps(breakpoints)}>{left}</StyledLeft>
			<StyledMid breakpoints={sortBps(breakpoints)}>{mid}</StyledMid>
			<StyledRight breakpoints={sortBps(breakpoints)}>{right}</StyledRight>
		</StyledContainer>
	);
};

const StyledContainer = styled.section`
	width: 100%;
	display: flex;
	flex-flow: row wrap;
`;

const StyledDiv = styled.div`
	width: 100%;
`;

const StyledLeft = styled(StyledDiv)<{ breakpoints: Breakpoints }>`
	@media (min-width: ${({ breakpoints }): string => `${breakpoints[0]}px`}) {
		width: 60%;
		order: 2;
	}
`;

const StyledMid = styled(StyledDiv)<{ breakpoints: Breakpoints }>`
	@media (min-width: ${({ breakpoints }): string => `${breakpoints[0]}px`}) {
		width: 40%;
		order: 1;
	}

	@media (min-width: ${({ breakpoints }): string => `${breakpoints[1]}px`}) {
		width: 20%;
	}
`;

const StyledRight = styled(StyledDiv)<{ breakpoints: Breakpoints }>`
	@media (min-width: ${({ breakpoints }): string => `${breakpoints[0]}px`}) {
		width: 100%;
		order: 3;
	}

	@media (min-width: ${({ breakpoints }): string => `${breakpoints[1]}px`}) {
		width: 20%;
	}
`;
