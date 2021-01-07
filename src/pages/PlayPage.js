import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

import {
    BannerText,
    BodyText,
    BannerContainer,
} from './../components';

export const PlayPage = ({theme}) => {
    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>Odds & Ends</BannerText>
                <BodyText>This page is currently under construction.</BodyText>
            </BannerContainer>
            <FontAwesomeIcon icon={faTools} size="6x" color={theme.color.textPrimary} />
            <br />
            <br />
            <br />
        </React.Fragment>
    );
};