import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p`
    font-family: ${({theme}) => theme.fontFamily.body};
    font-size: ${({theme}) => theme.fontSize.small};
    font-weight: normal;
    color: ${({theme}) => theme.color.textSecondary};
`;

const FooterContainer = styled.footer`
    text-align: center;
    margin: ${({theme}) => theme.padding.pageVertical} ${({theme}) => theme.padding.pageHorizontal};
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>Made with ♥ by Anna Xing</FooterText>
        </FooterContainer>
    );
}