import React, { ReactElement } from 'react';
import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { ActionItem, Alignments, margins } from '../Bar';

export interface IIconItem {
	align?: Alignments;
	actionItem: ActionItem;
}

export const IconItem = ({ align, actionItem }: IIconItem): ReactElement => (
	<StyledDisplayNodeContainer align={align} onClick={(): void => actionItem.actionFn(actionItem)}>
		{actionItem.displayNode.icon}
		{actionItem.displayNode.title}
	</StyledDisplayNodeContainer>
);

const getMargin = (align: Alignments): string => margins[align];

const StyledDisplayNodeContainer = styled.div`
	${({ theme }): FlattenSimpleInterpolation => theme.mixins.link}
	display: flex;
	align-items: center;
	margin: ${(props: Pick<IIconItem, 'align'>): string => getMargin(props.align || 'right')};
`;
