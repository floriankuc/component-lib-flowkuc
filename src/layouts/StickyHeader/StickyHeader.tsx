import React, { ReactNode, ReactElement } from 'react';
import styled from 'styled-components';

export interface IStickyHeader {
	header: ReactNode;
	content: ReactNode;
}

export const StickyHeader = ({ header, content }: IStickyHeader): ReactElement => (
	<div>
		<StyledHeader>{header}</StyledHeader>
		<main>{content}</main>
	</div>
);

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
`;
