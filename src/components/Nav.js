import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

import { bounceWrapper, colourChangeWrapper, debounce } from './util';
import { ThemeToggle } from './ThemeToggle';

export const NAV_HEIGHT = '2rem';

const NavTitle = bounceWrapper(styled.h1`
    font-size: ${({theme}) => theme.fontSize.small};
    margin: 0;
    line-height: 0;

    & > a {
        color: ${({theme}) => theme.color.textPrimary};
        text-decoration: none;
    }
`);

const NavItem = styled.li`
    line-height: 0;
    margin: 0 0 0 ${({theme}) => theme.margin.navItemsBetween};
`;

const StyledLink = colourChangeWrapper(styled(Link)`
    text-decoration: none;
    color: ${(props) => 
        props.active ? props.theme.color.textPrimary : props.theme.color.textSecondary};
    font-size: ${({theme}) => theme.fontSize.small};
`);

const StyledA = colourChangeWrapper(styled.a`
    text-decoration: none;
    color: ${({theme}) => theme.color.textSecondary};
    font-size: ${({theme}) => theme.fontSize.small};
`);

const LinkContainer = styled.ul`
    display: float;
    right: 0;
    padding: 0 0 0 28px;
    margin: 0;
    list-style-type: none;
`;

const NavBar = styled.nav`
        position: fixed;
        z-index: ${({theme}) => theme.zIndex.nav};
        width: calc(100% - ${({theme}) => theme.padding.pageHorizontal} * 2);
        max-width: calc(${({theme}) => theme.maxWidth.page}
            + ${({theme}) => theme.padding.pageHorizontal});
        height: ${NAV_HEIGHT};
        font-family: ${({theme}) => theme.fontFamily.body};
        display: flex;
        justify-content: space-between;
        padding: ${({theme}) => theme.padding.navVertical} 0;
        margin: ${({theme}) => theme.margin.navVertical} 0;
        transition: ${({theme}) => theme.transition.navTop};
    `;

export const Nav = ({theme, themeType, toggleThemeType}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 50)
            || currentScrollPos < 100
        );
        setPrevScrollPos(currentScrollPos);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    const location = useLocation();

    return (
        <NavBar style={{top: visible ? '0' : '-60px'}}>
            <NavTitle>
                <Link to='/'>Anna Xing</Link>
            </NavTitle>
            <LinkContainer>
                <NavItem>
                    <StyledLink to='/' active={location.pathname === '/'}>Work</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/projects' active={location.pathname === '/projects'}>Projects</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/play' active={location.pathname === '/play'}>Play</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/about' active={location.pathname === '/about'}>About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledA href='https://drive.google.com/file/d/1ZqcecURszhB7Q_R0ZfTt-0tmJ1LMavxU/view' target='_blank' rel='noopener noreferrer'>
                        Resume
                    </StyledA>
                </NavItem>
                <ThemeToggle theme={theme} themeType={themeType} toggleThemeType={toggleThemeType} />
            </LinkContainer>
        </NavBar>
    );
};