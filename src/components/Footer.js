import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faMediumM, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';

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
    margin: ${({theme}) => theme.padding.pageVertical} ${({theme}) => theme.padding.pageHorizontal};
`;

const StyledIcon = styled(FontAwesomeIcon)`
    margin: 0 12px;
    color: ${({theme}) => theme.color.textPrimary};

    &:hover {
        color: ${({theme}) => theme.color.textAccent};
        transition: ${({theme}) => theme.transition.color};
    }
`;

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