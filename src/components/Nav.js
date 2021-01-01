import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NAV_HEIGHT = '2rem';

const NavTitle = styled.h1`
    font-size: ${(props) => props.theme.fontSize.medium}rem;
    margin: 0;
    line-height: 0;

    & > a {
        color: ${(props) => props.theme.color.textPrimary};
        text-decoration: none;
    }
    & > a:hover {
        color: ${(props) => props.theme.color.textAccent};
    }
`;

const NavItem = styled.li`
    line-height: 0;
    margin: 0 8px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.color.textPrimary};
    font-size: ${(props) => props.theme.fontSize.medium}rem;
    
    &:hover {
        color: ${(props) => props.theme.color.textAccent};
    }
`;

const LinkContainer = styled.ul`
    display: float;
    right: 0;
    padding: 0 28px;
    list-style-type: none;
`;

const NavBar = styled.nav`
    position: fixed;
    top: 0;
    z-index: ${(props) => props.theme.fontFamily.nav};
    width: calc(${(props) => props.theme.maxWidth.page}px
        + ${(props) => props.theme.padding.pageHorizontal}px);
    height: ${NAV_HEIGHT};
    font-family: ${(props) => props.theme.fontFamily.body};
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${(props) => props.theme.color.backgroundPrimary};
    padding: 8px 0;
`;

export const Nav = () => {
    return (
        <NavBar>
            <NavTitle>
                <Link to='/'>Anna Xing</Link>
            </NavTitle>
            <LinkContainer>
                <NavItem>
                    <StyledLink to='/'>Work</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/play'>Play</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/about'>About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='https://drive.google.com/file/d/1ZqcecURszhB7Q_R0ZfTt-0tmJ1LMavxU/view'>
                        Resume
                    </StyledLink>
                </NavItem>
            </LinkContainer>
        </NavBar>
    );
};