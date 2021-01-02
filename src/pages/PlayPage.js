import React from 'react';

import {
    BannerText,
    HeadingText,
    BodyText,
    TagText,
    Tag,
    CardContainer,
    ImgCard,
    TextCard,
    CardsGrid,
    BannerContainer,
} from './../components';

import bigTechIllustImg from './../assets/img/writing/big-tech-illustration.jpeg';
import collinCountyImg from './../assets/img/writing/collin-county.jpg';

export const PlayPage = ({theme}) => {
    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>Odds & Ends</BannerText>
                <BodyText>An assortment of writing, digital art, and paintings.</BodyText>
            </BannerContainer>
            <CardsGrid>
                <a href="https://anna-xing.medium.com/a-brief-overview-of-big-tech-illustration-flat-design-corporate-memphis-and-alegria-a9b54a35c6b1" target="_blank" rel="noopener noreferrer">
                    <CardContainer height={theme.cardSize.writingHeight}>
                        <TextCard>
                            <Tag>
                                <TagText>Writing</TagText>
                            </Tag>
                            <HeadingText>A Brief Overview of Big Tech Illustration</HeadingText>
                            <BodyText>Flat Design, Corporate Memphis, and Alegria</BodyText>
                        </TextCard>
                        <ImgCard bgImg={bigTechIllustImg} />
                    </CardContainer>
                </a>
                <a href="https://qwhery.com/collin-county-texas-achieves-record-breaking-turnout-with-location-based-outreach-tools/" target="_blank" rel="noopener noreferrer">
                    <CardContainer height={theme.cardSize.writingHeight}>
                        <ImgCard bgImg={collinCountyImg} />
                        <TextCard>
                            <Tag>
                                <TagText>Writing</TagText>
                            </Tag>
                            <HeadingText>Collin County, Texas Achieves Record-Breaking Voter Turnout</HeadingText>
                            <BodyText>The Role of Location-Based Outreach Tools in its Election</BodyText>
                        </TextCard>
                    </CardContainer>
                </a>
            </CardsGrid>
        </React.Fragment>
    );
};