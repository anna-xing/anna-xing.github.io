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
    color: ${({theme}) => theme.color.textSecondary};
`;

const FooterContainer = styled.footer`
    text-align: center;
    margin: ${({theme}) => theme.padding.pageVertical} ${({theme}) => theme.padding.pageHorizontal};
`;

const StyledIcon = styled(FontAwesomeIcon)`
    margin: 0 12px;
    color: ${({theme}) => theme.color.textPrimary};
`;

export const Footer = () => {
    return (
        <FooterContainer>
            <IconContainer>
                <StyledIcon icon={faLinkedinIn} size='lg' />
                <StyledIcon icon={faGithub} size='lg' />
                <StyledIcon icon={faMediumM} size='lg' />
                <StyledIcon icon={faEnvelope} size='lg' />
            </IconContainer>
            <FooterText>Made with <FontAwesomeIcon icon={faHeart} /> by Anna Xing</FooterText>
        </FooterContainer>
    );
}