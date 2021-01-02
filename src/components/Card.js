import styled from 'styled-components';

// Props: height
export const CardContainer = styled.div`
    min-height: ${({height}) => height};
    padding: 0;
    display: flex;
    box-shadow: none;
    transition: ${({theme}) => theme.transition.boxShadow};

    &:hover {
        box-shadow: ${({theme}) => theme.boxShadow.card};
    }
`;

export const TextCard = styled.div`
    z-index: ${({theme}) => theme.zIndex.overlay};
    min-height: calc(100% - ${({theme}) => theme.padding.pageVertical} * 2);
    width: calc(50% - ${({theme}) => theme.padding.pageHorizontal} * 2);
    margin: 0;
    padding: ${({theme}) => theme.padding.pageVertical}
        ${({theme}) => theme.padding.pageHorizontal} 
        calc(${({theme}) => theme.padding.pageVertical} * 2);
    text-align: left;
    outline: ${({theme}) => theme.outline};
`;

// Props: bgImg
export const ImgCard = styled.div`
    zIndex: 0;
    min-height: height: calc(100% - ${({theme}) => theme.padding.pageVertical} * 2);
    width: 50%;
    margin: 0;
    padding: 0;
    background-image: url(${({bgImg}) => bgImg});
    background-color: ${({theme}) => theme.color.backgroundSecondary};
    background-size: cover;
    background-position: center;
    outline: ${({theme}) => theme.outline};
`;

export const CardsGrid = styled.div`
    margin: 0;
    padding: ${({theme}) => theme.padding.pageVertical} 0;
`;