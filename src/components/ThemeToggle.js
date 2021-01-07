import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ToggleContainer = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${({theme}) => theme.color.backgroundPrimary};
    width: 78px;
    height: ${({theme}) => theme.fontSize.large};
    border: ${({theme}) => [
        theme.outlineWidth.button,
        theme.outlineType.button,
        theme.color.textPrimary,
    ].join(' ')};
    padding: 6px;
    overflow: hidden;
    cursor: pointer;
    align-items: center;
    
    &:focus {
        outline: none;
    }

    FontAwesomeIcon {
        transition: all 300ms linear;
        
        &:first-child {
            transform: ${({isLightTheme}) => 
                isLightTheme ? 'translateY(0)' : 'translateY(100px)'};
        }

        &:nth-child(2) {
            transform: ${({isLightTheme}) => 
                isLightTheme ? 'translateY(-100px)' : 'translateY(0)'};}
        }
    }
`; // add margin, border-radius, font-size if needed

export const ThemeToggle = ({themeType, toggleThemeType}) => {
    return (
        <ToggleContainer isLightTheme={themeType === 'light'} onClick={toggleThemeType}>
            <FontAwesomeIcon icon={faSun} size="lg" />
            <FontAwesomeIcon icon={faMoon} size="lg" />
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