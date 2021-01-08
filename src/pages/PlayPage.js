import React, { useEffect } from 'react';
import styled from 'styled-components';

import {
    BannerText,
    HeadingText,
    BodyText,
    TagContainer,
    TagText,
    Tag,
    SingleCardContainer, 
    SingleTextCard,
    SingleCardsGrid,
    BannerContainer,
    SingleImgCard,
} from './../components';

import baroque from './../assets/img/art/baroque.jpg';
import fishing from './../assets/img/art/fishing.png';
import majorTom from './../assets/img/art/major-tom.jpg';
import motherTongue from './../assets/img/art/mother-tongue.jpg';
import skeleton from './../assets/img/art/skeleton.jpg';
import theDinner from './../assets/img/art/the-dinner.jpg';
import stillLife from './../assets/img/art/still-life.jpg';

const StyledA = styled.a`
    margin: auto;
`;

const writingList = [
    {
        link: 'https://anna-xing.medium.com/a-brief-overview-of-big-tech-illustration-flat-design-corporate-memphis-and-alegria-a9b54a35c6b1',
        tags: ['Writing'],
        title: 'A Brief Overview of Big Tech Illustration',
        desc: 'Flat design, Corporate Memphis, and Alegria',
    },
    {
        link: 'https://qwhery.com/collin-county-texas-achieves-record-breaking-turnout-with-location-based-outreach-tools/',
        tags: ['Writing', 'Qwhery'],
        title: 'Collin County, Texas Achieves Record-Breaking Voter Turnout',
        desc: 'The role of location-based outreach tools in its election',
    },
    {
        link: 'https://qwhery.com/introducing-the-qwhery-cloud/',
        tags: ['Writing', 'Qwhery'],
        title: 'Engaging Communities with Voice Tech and Location Intelligence',
        desc: 'What is community engagement, and how can it be improved?',
    },
    {
        link: 'https://qwhery.com/q11-connecting-municipalities-directly-with-residents/',
        tags: ['Writing', 'Qwhery'],
        title: 'Q11: Connecting Municipalities Directy with Residents',
        desc: 'Filling the gaps in municipal information systems',
    },
]

const artList = [majorTom, fishing, theDinner, skeleton, baroque, stillLife, motherTongue];

export const PlayPage = ({theme}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    let writingCards = [];
    writingList.forEach((writing) => {
        let tagElems = [];
        writing.tags.forEach((tag) => {
            tagElems.push(
                <Tag><TagText>{tag}</TagText></Tag>
            );
        });

        writingCards.push(
            <StyledA href={writing.link}>
                <SingleCardContainer height={theme.cardSize.writingHeight}>
                    <SingleTextCard>
                        <TagContainer>
                            {tagElems}
                        </TagContainer>
                        <HeadingText>{writing.title}</HeadingText>
                        <BodyText>{writing.desc}</BodyText>
                    </SingleTextCard>
                </SingleCardContainer>
            </StyledA>
        );
    });

    let artCards = [];
    artList.forEach((art) => {
        artCards.push(
            <SingleCardContainer height={theme.cardSize.artHeight}>
                <SingleImgCard bgImg={art} />
            </SingleCardContainer>
        );
    });

    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>Odds & Ends</BannerText>
                <BodyText>An assortment of writing, digital art, and paintings.</BodyText>
            </BannerContainer>
            <SingleCardsGrid>
                {writingCards}
                {artCards}
            </SingleCardsGrid>
        </React.Fragment>
    );
};