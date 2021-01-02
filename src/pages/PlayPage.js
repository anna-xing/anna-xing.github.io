import React from 'react';

import {
    BannerText,
    HeadingText,
    BodyText,
    TagContainer,
    TagText,
    Tag,
    CardContainer, // Maybe remove
    SingleCardContainer, 
    ImgCard,
    TextCard,
    SingleTextCard,
    CardsGrid,
    SingleCardsGrid,
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
            <SingleCardsGrid>
                <a href="https://anna-xing.medium.com/a-brief-overview-of-big-tech-illustration-flat-design-corporate-memphis-and-alegria-a9b54a35c6b1" target="_blank" rel="noopener noreferrer">
                    <SingleCardContainer height={theme.cardSize.writingHeight}>
                        <SingleTextCard>
                            <TagContainer>
                                <Tag><TagText>Writing</TagText></Tag>
                            </TagContainer>
                            <HeadingText>A Brief Overview of Big Tech Illustration</HeadingText>
                            <BodyText>Flat Design, Corporate Memphis, and Alegria</BodyText>
                        </SingleTextCard>
                    </SingleCardContainer>
                </a>
                <a href="https://qwhery.com/collin-county-texas-achieves-record-breaking-turnout-with-location-based-outreach-tools/" target="_blank" rel="noopener noreferrer">
                    <SingleCardContainer height={theme.cardSize.writingHeight}>
                        <SingleTextCard>
                            <TagContainer>
                                <Tag><TagText>Writing</TagText></Tag>
                                <Tag><TagText>Qwhery</TagText></Tag>
                            </TagContainer>
                            <HeadingText>Collin County, Texas Achieves Record-Breaking Voter Turnout</HeadingText>
                            <BodyText>The Role of Location-Based Outreach Tools in its Election</BodyText>
                        </SingleTextCard>
                    </SingleCardContainer>
                </a>
                <a href="https://qwhery.com/introducing-the-qwhery-cloud/" rel='noopener noreferrer'>
                    <SingleCardContainer height={theme.cardSize.writingHeight}>
                        <SingleTextCard>
                            <TagContainer>
                                <Tag><TagText>Writing</TagText></Tag>
                                <Tag><TagText>Qwhery</TagText></Tag>
                            </TagContainer>
                            <HeadingText>Engaging Communities with Voice Tech and Location Intelligence</HeadingText>
                        </SingleTextCard>
                    </SingleCardContainer>
                </a>
                <a href="https://qwhery.com/q11-connecting-municipalities-directly-with-residents/" rel='noopener noreferrer'>
                    <SingleCardContainer height={theme.cardSize.writingHeight}>
                        <SingleTextCard>
                            <TagContainer>
                                <Tag><TagText>Writing</TagText></Tag>
                                <Tag><TagText>Qwhery</TagText></Tag>
                            </TagContainer>
                            <HeadingText>Q11: Connecting Municipalities Directly with Residents</HeadingText>
                            <BodyText>Filling the Gaps in Municipal Information Systems</BodyText>
                        </SingleTextCard>
                    </SingleCardContainer>

                </a>
            </SingleCardsGrid>
        </React.Fragment>
    );
};