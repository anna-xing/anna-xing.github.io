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
                    I'm a third-year BCS student at the University of Waterloo, graduating in April 2024.
	            In my spare time, I volunteer as a Software Developer and Product Designer at Develop for Good, 
	            where I'm building a full-stack web app for the educational nonprofit 
	    	    <TextLink href="https://classroomswithoutborders.org/" target="_blank">Classrooms Without Borders</TextLink>!
	    	    I'm also currently working on a complete website redesign for the climate nonprofit 
	    	    </TextLink href="https://www.greenprobono.org/" target="_blank">Green Pro Bono</TextLink>.
	    	</BodyText>
	    	<BodyText>
                    In the past, I've interned as a Portfolio Analytics Developer at TD, as well as 
	    	    a Web Application Developer for UW's Computer Science Computing Facility.
	            I'm currently seeking opportunities for Winter 2022 in software development and UI/UX.
                </BodyText>
                <BodyText>
                    I'm passionate about human-centered design, which is why I'm pursuing a Human-Computer 
                    Interaction specialization and Cognitive Science minor within my degree. I love applying 
	            interdisciplinary knowledge to design and build products for social and environmental good.
                </BodyText>
                <BodyText>
                    To chat about anything from software to Spanish basilicas, feel free to connect with 
                    me via email at
                    <TextLink href="mailto:anna.xing@uwaterloo.ca"> anna.xing@uwaterloo.ca </TextLink>
                    or through any of my links below. 
	    	    I particularly love talking about opportunities for social impact within tech!
                </BodyText>
                <BodyTextSpan>
                    When I'm not tinkering with dev tools, you can find me:
                    <Typical
                        steps={[
                            ' jamming on the ukulele.', theme.transition.typical,
                            ' making art.', theme.transition.typical,
                            ' reading pretentious fiction.', theme.transition.typical,
                            ' writing articles and short stories.', theme.transition.typical,
                            ' learning about architecture and design.', theme.transition.typical,
                            ' playing volleyball.', theme.transition.typical,
                        ]}
                        loop={Infinity}
                        wrapper={BodyTextSpan}
                    />
                </BodyTextSpan>
            </TextContainer>
        </React.Fragment>
    );
}
