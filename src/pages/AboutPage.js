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

export const AboutPage = ({theme}) => {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return (
        <React.Fragment>
            <BannerContainer>
                <BannerText>About Me</BannerText>
            </BannerContainer>
            <TextContainer>
                <BodyText>
                    I'm a second-year BCS student at the University of Waterloo.
	            This spring, I'll be working as a Full-Stack Portfolio Analytics Developer at TD.
                    In the past, I've also been a Web Developer for UW's Computer Science Computing Facility,
                    where I worked on applications supporting faculty and students. 
	            I'm currently seeking opportunities for Winter 2022 in software development and UI/UX.
                </BodyText>
                <BodyText>
                    I'm passionate about human-centered design, which is why I'm pursuing a Human-Computer 
                    Interaction specialization and Cognitive Science minor within my degree. I love applying 
	            interdisciplinary knowledge to design and build products with the potential to do social good.
                </BodyText>
                <BodyText>
                    To chat about anything from software to Spanish basilicas, feel free to connect with 
                    me via email at
                    <TextLink href="mailto:anna.xing@uwaterloo.ca"> anna.xing@uwaterloo.ca </TextLink>
                    or through any of my links below.
                </BodyText>
                <BodyTextSpan>
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
                        wrapper={BodyTextSpan}
                    />
                </BodyTextSpan>
            </TextContainer>
        </React.Fragment>
    );
}
