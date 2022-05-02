import React from "react";

import {
  HeadingText,
  BodyText,
  TagText,
  Tag,
  TagContainer,
  CardContainer,
  TextCard,
  ImgCard,
} from "./../components";

export const WorkCard = (project, theme, textRight=false) => {
  let tagElems = [];
  project.tags.forEach((tag) => {
    tagElems.push(
      <Tag key={`${project.title}-${tag}`}><TagText>{tag}</TagText></Tag>
    );
  });
  return <a href={project.link} target="_blank" rel="noopener noreferrer" key={project.title}>
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
}