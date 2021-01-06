import React from 'react';
import Typical from 'react-typical';

import {
    BannerContainer,
    BannerText,
    BodyText,
    TextContainer,
    TextLink,
} from './../components';

export const AboutPage = ({theme}) => {
    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>About Me</BannerText>
            </BannerContainer>
            <TextContainer>
                <BodyText>
                    I'm a second-year Computer Science student at the University of Waterloo. 
                    This past fall, I was a Web Developer for UW's Computer Science Computing Facility,
                    where I worked on university-wide applications for faculty and student support. I'm
                    currently seeking opportunities for Spring 2021.
                </BodyText>
                <BodyText>
                    I'm passionate about human-centered design! I love applying interdisciplinary 
                    knowledge to build products with the potential to do social good.
                </BodyText>
                <BodyText>
                    To chat about anything from software to Spanish basilicas, feel free to connect with 
                    me via email at
                    <TextLink href="mailto:anna.xing@uwaterloo.ca"> anna.xing@uwaterloo.ca </TextLink>
                    or through any of my links below.
                </BodyText>
                <BodyText>
                    When I'm not tinkering with dev tools, you can find me: 
                    <Typical
                        steps={[
                            ' making art.', theme.transition.typical,
                            ' jamming on the ukulele.', theme.transition.typical,
                            ' reading pretentious fiction.', theme.transition.typical,
                            ' writing articles and short stories.', theme.transition.typical,
                            ' learning about architecture and design.', theme.transition.typical,
                            ' running.', theme.transition.typical,
                        ]}
                        loop={Infinity}
                        wrapper='BodyText'
                    />
                </BodyText>
            </TextContainer>
        </React.Fragment>
    );
}