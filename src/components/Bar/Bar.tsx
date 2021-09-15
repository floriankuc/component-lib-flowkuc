import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { media } from '../../theme/media';
import { IconItem } from '../IconItem';

export interface IBar {
	actionItems?: ActionItem[];
	sticky?: boolean;
	className?: string;
	align?: Alignments;
}

export type ActionFn = (actionItem: ActionItem) => void;

export type DisplayNode = {
	title?: string;
	icon?: React.ReactNode;
};

export type ActionItem = {
	id: string;
	displayNode: DisplayNode;
	actionFn: ActionFn;
};

export type Alignments = 'left' | 'center' | 'right';

export const alignments: { [key in Alignments]: string } = {
	left: 'flex-start',
	center: 'center',
	right: 'flex-end',
};

export const margins: { [key in Alignments]: string } = {
	left: '0 20px 0 0',
	center: '0 10px',
	right: '0 0 0 20px',
};

export const Bar = ({ className, align, sticky, actionItems }: IBar): ReactElement => {
	const renderActionItem = (item: ActionItem): ReactElement => <IconItem key={item.id} align={align} actionItem={item} />;

	return (
		<StyledBarContainer className={className} align={align || 'right'} sticky={sticky}>
			{actionItems && actionItems.map(renderActionItem)}
		</StyledBarContainer>
	);
};

const StyledBarContainer = styled.div`
	padding: 8px;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: ${(props: IBar): string => alignments[props.align || 'right']};
	position: ${(props: IBar): string => (props.sticky ? `sticky` : `static`)};
	overflow: hidden;
	min-height: 40px;
	max-height: 68px;
	height: 68px;
	top: ${(props: IBar): string => (props.sticky ? `0` : ``)};
	${media.sm} {
		height: 40px;
	}
	background-color: #999;
`;
