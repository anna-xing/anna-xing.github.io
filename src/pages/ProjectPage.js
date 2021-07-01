import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import {
    BannerText,
    BannerContainer,
    idToTitle,
} from './../components';

export const ProjectPage = () => {
    const { id } = useParams();

    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>{idToTitle(id)}</BannerText>
            </BannerContainer>
        </React.Fragment>
    );
};