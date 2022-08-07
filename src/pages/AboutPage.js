import React, { useEffect } from 'react';
import Typical from 'react-typical';

import {
  BannerContainer,
  BannerText,
  BodyText,
  TextContainer,
  TextLink,
  BodyTextSpan,
} from './../components';

export const AboutPage = ({ theme }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BannerContainer>
        <BannerText>About Me</BannerText>
      </BannerContainer>
      <TextContainer>
        <BodyText>
          I'm a rising fourth-year BCS student at the University of Waterloo, graduating in April 2024.
          I recently wrapped up a Software Engineering internship at
          <TextLink href="https://upsolve.org/" target="_blank"> Upsolve</TextLink>,
          an incredible nonprofit legal tech organization helping people access their legal, civil, and human rights through free, user-friendly online tools,
          and redefining what a nonprofit can do with code.
        </BodyText>
        <BodyText>
          In the past, I've interned as a Portfolio Analytics Developer at TD, as well as
          a Web Application Developer for UW's Computer Science Computing Facility.
          I've also previously volunteered as a Software Developer and Product Designer at Develop for Good,
          where I helped build a full-stack web app for the educational nonprofit
          <TextLink href="https://classroomswithoutborders.org/" target="_blank"> Classrooms Without Borders</TextLink>.
        </BodyText>
        <BodyText>
          I'm passionate about human-centered design, which is why I'm pursuing a Human-Computer
          Interaction specialization and Cognitive Science minor within my degree. I love applying
          interdisciplinary knowledge to design and build products for social good.
        </BodyText>
        <BodyText>
          I'm currently seeking opportunities for Summer and Fall 2023 in software development, UI/UX, and product.
        </BodyText>
        <BodyText>
          To chat about anything from software to Spanish basilicas, feel free to connect with
          me via email at
          <TextLink href="mailto:anna.xing@uwaterloo.ca"> anna.xing@uwaterloo.ca </TextLink>
          or through any of my links below.
          I particularly enjoy talking about opportunities for social impact within tech!
        </BodyText>
        <BodyTextSpan>
          When I'm not tinkering with dev tools, you can find me:
          <Typical
            steps={[
              ' rock climbing.', theme.transition.typical,
              ' playing volleyball.', theme.transition.typical,
              ' making art.', theme.transition.typical,
              ' reading pretentious fiction.', theme.transition.typical,
              ' learning about architecture and design.', theme.transition.typical,
            ]}
            loop={Infinity}
            wrapper={BodyTextSpan}
          />
        </BodyTextSpan>
      </TextContainer>
    </>
  );
}
