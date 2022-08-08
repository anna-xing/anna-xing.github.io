import React, { useEffect } from "react";

import {
  BannerText,
  BodyText,
  CardsGrid,
  BannerContainer,
  WorkCard,
} from "./../components";

import {
  upsolveImg,
  tdBankImg,
  uWaterlooImg,
} from "./../assets/img/work";

const workList = [
  {
    link: "https://upsolve.org",
    title: "Upsolve: Software Engineer Intern",
    desc: "Building legal tech to empower all Americans to access their civil and financial rights.",
    term: "Winter 2022",
    tags: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Objection.js",
      "Docker",
      "CSS",
      "DataDog",
      "XState",
      "Google Analytics API",
    ],
    img: upsolveImg,
  },
  {
    title: "TD Asset Management: Portfolio Analytics Developer",
    desc: "Building web applications to support portfolio manager activites.",
    term: "Spring 2021",
    tags: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "SQL",
      "XLSXWriter",
      "VirtualBox",
      "Jira",
    ],
    img: tdBankImg,
  },
  {
    link: "https://uwaterloo.ca/computer-science-computing-facility/",
    title: "UWaterloo CSCF: Web Application Developer",
    desc: "Building web applications for student and faculty use.",
    term: "Fall 2020",
    tags: [
      "Python",
      "JavaScript",
      "CSS",
      "PostgreSQL",
    ],
    img: uWaterlooImg,
  }
]

export const WorkPage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let textRight = false;
  let workCards = [];
  workList.forEach((workItem) => {
    workCards.push(WorkCard(workItem, theme, textRight));
    textRight = !textRight;
  });

  return (
    <React.Fragment>
      <BannerContainer>
        <BannerText>Hi! I'm Anna.</BannerText>
        <BodyText>
          I'm a Computer Science student passionate about tech, design, and data for social good.
          Here's where I've worked in the past.
        </BodyText>
      </BannerContainer>
      <CardsGrid>
        {workCards}
      </CardsGrid>
    </React.Fragment>
  );
};
