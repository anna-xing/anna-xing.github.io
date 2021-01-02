import styled from 'styled-components';

// Props: bgColor, width, height
export const Rectangle = styled.div`
    position: absolute;
    background-color: ${(props) => props.bgColor};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    z-index: ${(props) => props.theme.zIndex.background};
`;