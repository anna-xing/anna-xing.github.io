import React, { useEffect } from "react";

import { 
    BannerText,
    HeadingText,
    BodyText,
    TagText,
    Tag,
    TagContainer,
    CardContainer,
    TextCard,
    ImgCard,
    CardsGrid,
    BannerContainer,
} from "./../components";

import tickerExtImg from './../assets/img/work/ticker-extension.jpg';
import bitwheelImg from './../assets/img/work/bitwheel.jpg';
import hurrEvacImg from './../assets/img/work/hurr-evac.jpg';
import projectPinkImg from './../assets/img/work/project-pink.jpg';
import cwbImg from './../assets/img/work/cwb.jpg';

const projectList = [
    {
	link: 'https://on-this-day-cwb.herokuapp.com/',
	title: 'Classrooms Without Borders: On This Day',
	desc: 'Web app engaging students in Holocaust history through archival research.',
	tags: [
	    'JavaScript',
	    'React',
	    'Firebase',
            'Material UI',
            'CSS',
	    'Figma',
        ],
	img: cwbImg,
    },
    {
        link: 'https://github.com/anna-xing/ticker-extension',
        title: 'Stock Ticker Lookup',
        desc: 'Chrome extension providing quick access to stock information.',
        tags: [
            'JavaScript',
            'Alpha Vantage API',
            'Google Chrome API',
            'HTML',
            'CSS',
        ],
        img: tickerExtImg,
    },
    {
        link: 'https://github.com/anna-xing/oneledger-challenge',
        title: 'Bitwheel',
        desc: 'Web app using the blockchain to track used car parts.',
        tags: [
            'JavaScript',
            'OneLedger SDK',
            'HTML',
            'CSS',
        ],
        img: bitwheelImg,
    },
    {
        link: 'https://github.com/anna-xing/hurricane-evac',
        title: 'Hurricane Evac',
        desc: 'Web app helping populations in hurricane-prone areas determine safe courses of evacuation.',
        tags: [
            'Python',
            'Flask',
            'JavaScript',
            'MongoDB',
        ],
        img: hurrEvacImg,
    },
    {
        link: 'https://github.com/anna-xing/project-pink-update',
        title: 'Project Pink',
        desc: 'Web app crowdsourcing location data to help vulnerable women find free menstrual products.',
        tags: [
            'JavaScript',
            'Google Maps API',
            'HTML',
            'CSS',
            'Bootstrap',
        ],
        img: projectPinkImg,
    },
];

export const WorkPage = ({theme}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    let projectCards = [];
    let textRight = false;
    projectList.forEach((project) => {
        let tagElems = [];
        project.tags.forEach((tag) => {
            tagElems.push(
                <Tag key={`${project.title}-${tag}`}><TagText>{tag}</TagText></Tag>
            );
        });

        projectCards.push(
            <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
                <CardContainer height={theme.cardSize.projectHeight}>
                    {textRight ? <ImgCard bgImg={project.img} /> : null}
                    <TextCard>
                        <HeadingText>{project.title}</HeadingText>
                        <BodyText>{project.desc}</BodyText>
                        <TagContainer>
                            {tagElems}
                        </TagContainer>
                    </TextCard>
                    {textRight ? null : <ImgCard bgImg={project.img} />}
                </CardContainer>
            </a>
        );

        textRight = !textRight;
    });

    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>Hi! I'm Anna.</BannerText>
                <BodyText>I'm a Computer Science student passionate about using tech, design, and data for social good.</BodyText>
            </BannerContainer>
            <CardsGrid>
                {projectCards}
            </CardsGrid>
        </React.Fragment>
    );
};
