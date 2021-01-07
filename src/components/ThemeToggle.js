import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faMoon } from '@fortawesome/free-solid-svg-icons';

import { lightTheme, darkTheme } from './../themes';

const ToggleContainer = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.color.backgroundPrimary};
    width: 48px;
    height: 30px;
    padding: 6px 4px;
    margin: -12px 0 0 18px;
    overflow: hidden;
    cursor: pointer;
    align-items: center;
    border: ${({theme}) => [
        theme.outlineWidth.button,
        theme.outlineType.button,
        theme.color.textPrimary,
    ].join(' ')};
    border-radius: 30px;
    
    &:focus {
        outline: none;
    }

    svg {
        transition: ${({theme}) => theme.transition.all};

        &:first-child {
            transform: ${({isLightTheme}) => isLightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }

        &:nth-child(2) {
            transform: ${({isLightTheme}) => isLightTheme ? 'translateY(-100px)' : 'translateY(0)'};
        }
    }
`;

export const ThemeToggle = ({theme, themeType, toggleThemeType}) => {
    return (
        <ToggleContainer isLightTheme={themeType === 'light'} onClick={toggleThemeType}>
            <FontAwesomeIcon icon={faCircle} color={lightTheme.color.themeIcon} />
            <FontAwesomeIcon icon={faMoon} color={darkTheme.color.themeIcon} />
        </ToggleContainer>
    );
};

export const useDarkTheme = () => {
    const [themeType, setThemeType] = useState('light');
    
    const toggleThemeType = () => {
        if (themeType === 'light') {
            setThemeType('dark');
            window.localStorage.setItem('theme', 'dark');
        } else {
            setThemeType('light');
            window.localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        if (localTheme) {
            setThemeType(localTheme);
        } else {
            window.localStorage.setItem('theme', 'light');
        }
    }, []);

    return [themeType, toggleThemeType];
};