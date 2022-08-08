
import React, { useEffect } from "react";

import {
  BannerText,
  BodyText,
  CardsGrid,
  BannerContainer,
  WorkCard,
} from "./../components";

import {
  tickerExtImg,
  bitwheelImg,
  hurrEvacImg,
  projectPinkImg,
  cwbImg,
  rayTracerImg,
} from "./../assets/img/work";

const projectList = [
  {
    link: 'https://drive.google.com/file/d/1m23x79qd4DujPXTgJ-zanQvf0AP4MzbJ/view?usp=sharing',
    title: 'Ray Tracer',
    desc: 'Photorealistic ray tracer supporting texture mapping, anti-aliasing, reflection, refraction, distributed ray tracing, and more!',
    tags: [
      'C++',
      'OpenGL',
      'Lua',
    ],
    img: rayTracerImg,
  },
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

export const ProjectsPage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let textRight = false;
  let projectCards = [];
  projectList.forEach((project) => {
    projectCards.push(WorkCard(project, theme, textRight));
    textRight = !textRight;
  });

  return (
    <React.Fragment>
      <BannerContainer>
        <BannerText>Side Projects</BannerText>
        <BodyText>
          These include hackathon projects, volunteer initiatives, and personal interest projects.
        </BodyText>
      </BannerContainer>
      <CardsGrid>
        {projectCards}
      </CardsGrid>
    </React.Fragment>
  );
};
