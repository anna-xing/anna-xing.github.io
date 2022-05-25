import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
    BannerText,
    BodyText,
    BannerContainer,
    SingleImgCard,
    Tag,
    TagText,
    SingleCardContainer,
    SingleTextCard,
    TagContainer,
    HeadingText,
    SingleCardsGrid,
    Modal,
    tileCards,
} from './../components';

import baroque from './../assets/img/art/baroque.jpg';
import fishing from './../assets/img/art/fishing.png';
import majorTom from './../assets/img/art/major-tom.jpg';
import motherTongue from './../assets/img/art/mother-tongue.jpg';
import skeleton from './../assets/img/art/skeleton.jpg';
import theDinner from './../assets/img/art/the-dinner.jpg';
import stillLife from './../assets/img/art/still-life.jpg';
import houseFire from './../assets/img/art/house-fire.jpg';
import sausageBun from './../assets/img/art/sausagebun.png';
import bunny from './../assets/img/art/bunny.png';
import juicebox from './../assets/img/art/juicebox.png';
import moonshine from './../assets/img/art/moonshine.jpg';

const StyledA = styled.a`
    margin: auto;
`;

const writingList = [
    {
        link: 'https://www.stealthis.org/Database-Column-Encryption-with-Objection-js-3f800343791840f89a2c3d8dc8808d9e',
        tags: ['Writing', 'Upsolve'],
        title: "Database Column Encryption with Objection.js",
        desc: 'Encrypting user data at-rest with Objection.js to enhance database security',
    },
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
        title: 'Q11: Connecting Municipalities Directly with Residents',
        desc: 'Filling the gaps in municipal information systems',
    },
]

const artList = [
    {
        art: bunny,
        tag: 'Logo Design',
    },
    {
        art: sausageBun,
        tag: 'Digital Painting',
    },
    // {
    //     art: juicebox,
    //     tag: '2.5D Animation (WIP)',
    // },
    {
        art: majorTom,
        tag: 'Digital Painting',
    },
    {
        art: fishing,
        tag: 'Digital Painting',
    },
    {
        art: skeleton,
        tag: 'Digital Painting',
    },
    {
        art: motherTongue,
        tag: 'Colour Pencil',
    },
    {
        art: baroque,
        tag: 'Oil Painting',
    },
    {
        art: theDinner,
        tag: 'Acrylic Painting',
    },
    {
        art: stillLife,
        tag: 'Acrylic Painting',
    },
    {
        art: houseFire,
        tag: 'Digital Painting',
    },
    {
	art: moonshine,
	tag: 'India Ink',
    },
];

export const PlayPage = ({theme}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const [modalVisible, setModalVisible] = useState(false);
    const [lastClicked, setLastClicked] = useState(0);

    const showModal = (lastIndex) => {
        console.log(lastIndex)
        setLastClicked(lastIndex);
        setModalVisible(true);
    };

    const modal = (img) => {
        return modalVisible ? 
            <div onClick={() => { setModalVisible(false) }}>
                <Modal img={img} />
            </div>
        : null;
    };

    let writingCards = [];
    writingList.forEach((writing) => {
        let tagElems = [];
        writing.tags.forEach((tag) => {
            tagElems.push(
                <Tag key={`${writing.title}-${tag}`}><TagText>{tag}</TagText></Tag>
            );
        });

        writingCards.push(
            <StyledA href={writing.link} target="_blank" rel="noopener noreferrer" key={writing.title}>
                <SingleCardContainer height={theme.cardSize.playHeight}>
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
    let index = 0;
    artList.forEach((art) => {
        let currIndex = index;
        artCards.push(
            <SingleCardContainer height={theme.cardSize.playHeight} key={'art-' + index}>
                <SingleImgCard bgImg={art.art} onClick={() => { showModal(currIndex) }}>
                    <TagContainer>
                        <Tag><TagText>{art.tag}</TagText></Tag>
                    </TagContainer>
                </SingleImgCard>
            </SingleCardContainer>
        );
        index++;
    });

    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>Odds & Ends</BannerText>
                <BodyText>An assortment of writing, digital art, and paintings.</BodyText>
            </BannerContainer>
            <SingleCardsGrid>
                {tileCards(writingCards, artCards)}
                {modal(artList[lastClicked].art)}
            </SingleCardsGrid>
        </React.Fragment>
    );
};
