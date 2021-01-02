import React from "react";

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

export const WorkPage = ({theme}) => {
  return (
    <React.Fragment>
        <BannerContainer>
            <BannerText>Hi! I'm Anna.</BannerText>
            <BodyText>I'm a Computer Science student passionate about using tech, design, and data for social good.</BodyText>
        </BannerContainer>
        <CardsGrid>
            <a href="https://github.com/anna-xing/ticker-extension" target="_blank" rel="noopener noreferrer">
                <CardContainer height={theme.cardSize.projectHeight}>
                    <TextCard>
                        <HeadingText>Ticker Extension</HeadingText>
                        <BodyText>Chrome extension providing quick access to stock information.</BodyText>
                        <TagContainer>
                            <Tag><TagText>Javascript</TagText></Tag>
                            <Tag><TagText>Alpha Vantage API</TagText></Tag>
                            <Tag><TagText>Google Chrome API</TagText></Tag>
                            <Tag><TagText>HTML</TagText></Tag>
                            <Tag><TagText>CSS</TagText></Tag>
                        </TagContainer>
                    </TextCard>
                    <ImgCard bgImg={tickerExtImg} />
                </CardContainer>
            </a>
            <a href="https://github.com/anna-xing/oneledger-challenge" target="_blank" rel='noopener noreferrer'>
                <CardContainer height={theme.cardSize.projectHeight}>
                    <ImgCard bgImg={bitwheelImg} />
                    <TextCard>
                        <HeadingText>Bitwheel</HeadingText>
                        <BodyText>Web app using the blockchain to track used car parts.</BodyText>
                        <TagContainer>
                            <Tag><TagText>Javascript</TagText></Tag>
                            <Tag><TagText>OneLedger SDK</TagText></Tag>
                            <Tag><TagText>HTML</TagText></Tag>
                            <Tag><TagText>CSS</TagText></Tag>
                        </TagContainer>
                    </TextCard>
                </CardContainer>
            </a>
            <a href="https://github.com/anna-xing/hurricane-evac" target="_blank" rel='noopener noreferrer'>
                <CardContainer height={theme.cardSize.projectHeight}>
                    <TextCard>
                        <HeadingText>Hurricane Evac</HeadingText>
                        <BodyText>Web app helping populations in hurricane-prone areas determine safe courses of evacuation.</BodyText>
                        <TagContainer>
                            <Tag><TagText>Python</TagText></Tag>
                            <Tag><TagText>Flask</TagText></Tag>
                            <Tag><TagText>Javascript</TagText></Tag>
                            <Tag><TagText>MongoDB</TagText></Tag>
                        </TagContainer>
                    </TextCard>
                    <ImgCard bgImg={hurrEvacImg} />
                </CardContainer>
            </a>
            <a href="https://github.com/anna-xing/project-pink-update" target="_blank" rel='noopener noreferrer'>
                <CardContainer height={theme.cardSize.projectHeight}>
                    <ImgCard bgImg={projectPinkImg} />
                    <TextCard>
                        <HeadingText>Project Pink</HeadingText>
                        <BodyText>Web app crowdsourcing location data to help vulnerable women find free menstrual products.</BodyText>
                        <TagContainer>
                            <Tag><TagText>Javascript</TagText></Tag>
                            <Tag><TagText>Google Maps API</TagText></Tag>
                            <Tag><TagText>HTML</TagText></Tag>
                            <Tag><TagText>CSS</TagText></Tag>
                            <Tag><TagText>Bootstrap</TagText></Tag>
                        </TagContainer>
                    </TextCard>
                </CardContainer>
            </a>
        </CardsGrid>
    </React.Fragment>
  );
};
