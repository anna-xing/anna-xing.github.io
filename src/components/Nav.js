import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

export const NAV_HEIGHT = '2rem';

const NavTitle = styled.h1`
    font-size: ${(props) => props.theme.fontSize.small};
    margin: 0;
    line-height: 0;

    & > a {
        color: ${(props) => props.theme.color.textPrimary};
        text-decoration: none;
    }
    & > a:hover {
        color: ${(props) => props.theme.color.textAccent};
    }
`; // TODO: change color transition to a letter jumping thing

const NavItem = styled.li`
    line-height: 0;
    margin: 0 0 0 16px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => 
        props.active ? props.theme.color.textPrimary : props.theme.color.textSecondary};
    font-size: ${({theme}) => theme.fontSize.small};
    
    &:hover {
        color: ${({theme}) => theme.color.textPrimary};
        transition: ${({theme}) => theme.transition.color};
    }
`;

const StyledA = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.color.textSecondary};
    font-size: ${(props) => props.theme.fontSize.small};

    &:hover {
        color: ${(props) => props.theme.color.textPrimary};
        transition: ${({theme}) => theme.transition.color};
    }
`;

const LinkContainer = styled.ul`
    display: float;
    right: 0;
    padding: 0 0 0 28px;
    list-style-type: none;
`;

// TODO: turn width into max-width for smaller screens
const NavBar = styled.nav`
    position: fixed;
    top: 0;
    z-index: ${(props) => props.theme.zIndex.nav};
    width: calc(100% - ${({theme}) => theme.padding.pageHorizontal} * 2);
    max-width: calc(${({theme}) => theme.maxWidth.page}
        + ${({theme}) => theme.padding.pageHorizontal});
    height: ${NAV_HEIGHT};
    font-family: ${(props) => props.theme.fontFamily.body};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
`;

export const Nav = () => {
    const location = useLocation();
    return (
        <NavBar>
            <NavTitle>
                <Link to='/'>Anna Xing</Link>
            </NavTitle>
            <LinkContainer>
                <NavItem>
                    <StyledLink to='/' active={location.pathname === '/' ? 1 : 0}>Work</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/play' active={location.pathname === '/play' ? 1 : 0}>Play</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledLink to='/about' active={location.pathname === '/about' ? 1 : 0}>About</StyledLink>
                </NavItem>
                <NavItem>
                    <StyledA href='https://drive.google.com/file/d/1ZqcecURszhB7Q_R0ZfTt-0tmJ1LMavxU/view' target='_blank' rel='noopener noreferrer'>
                        Resume
                    </StyledA>
                </NavItem>
            </LinkContainer>
        </NavBar>
    );
};