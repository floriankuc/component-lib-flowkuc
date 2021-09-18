import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';

export interface IHeaderFooter {
	header: ReactNode;
	content: ReactNode;
	footer: ReactNode;
}

export const HeaderFooter = ({ header, content, footer }: IHeaderFooter): ReactElement => (
	<StyledContainer>
		<StyledHeader>{header}</StyledHeader>
		<StyledContent>{content}</StyledContent>
		<StyledFooter>{footer}</StyledFooter>
	</StyledContainer>
);

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	height: 100%;
`;

const StyledContent = styled.main`
	flex-grow: 1;
	overflow-y: auto;
`;

const StyledHeader = styled.header`
	flex-shrink: 0;
`;

const StyledFooter = styled.footer`
	flex-shrink: 0;
`;
