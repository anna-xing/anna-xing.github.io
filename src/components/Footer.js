import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

import { bounceWrapper } from './util';

const IconContainer = styled.div`
    text-align: center;
`;

const FooterText = styled.p`
    font-family: ${({theme}) => theme.fontFamily.body};
    font-size: ${({theme}) => theme.fontSize.xs};
    font-weight: normal;
    color: ${({theme}) => theme.color.textPrimary};
`;

const FooterContainer = styled.footer`
    text-align: center;
    padding: ${({theme}) => theme.padding.pageVertical} ${({theme}) => theme.padding.pageHorizontal};
`;

const StyledIcon = bounceWrapper(styled(FontAwesomeIcon)`
    margin: 0 ${({theme}) => theme.margin.footerHorizontal};
    color: ${({theme}) => theme.color.textPrimary};
`);

export const Footer = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <a href="https://www.linkedin.com/in/anna-xing/" target="_blank" rel="noreferrer noopener">
                    <StyledIcon icon={faLinkedinIn} size='lg' />
                </a>
                <a href="https://github.com/anna-xing" target="_blank" rel="noreferrer noopener">
                    <StyledIcon icon={faGithub} size='lg' />
                </a>
                <a href="https://anna-xing.medium.com/" target="_blank" rel="noreferrer noopener">
                    <StyledIcon icon={faMediumM} size='lg' />
                </a>
                <a href="mailto:anna.xing@uwaterloo.ca">
                    <StyledIcon icon={faEnvelope} size='lg' />
                </a>
            </IconContainer>
            <FooterText>Made with <FontAwesomeIcon icon={faHeart} /> by Anna Xing</FooterText>
        </FooterContainer>
    );
}