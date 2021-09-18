import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IGridRepeat {
	width: number;
	content: ReactElement[];
	gap?: number;
}

export type IStyledContainer = Pick<IGridRepeat, 'width' | 'gap'>;

export const GridRepeat = ({ width, content, gap }: IGridRepeat): ReactElement => (
	<StyledContainer width={width} gap={gap}>
		{content}
	</StyledContainer>
);

const StyledContainer = styled.div<IStyledContainer>`
	display: grid;
	gap: ${({ gap }): string => `${gap || 10}px`};
	grid-template-columns: ${({ width }): string => `repeat(auto-fit, minmax(${width}px, 1fr))`};
`;
