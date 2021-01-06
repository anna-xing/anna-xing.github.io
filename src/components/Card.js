import styled from 'styled-components';

// Props: height
export const CardContainer = styled.div`
    min-height: ${({height}) => height};
    padding: 0;
    display: flex;
    box-shadow: none;
    transition: ${({theme}) => theme.transition.boxShadow};
    outline: ${({theme}) => [
        theme.outlineWidth.card,
        theme.outlineType.card,
        theme.color.outline
    ].join(' ')};
    margin-bottom: calc(${({theme}) => theme.padding.pageVertical} * 2);

    &:hover {
        box-shadow: ${({theme}) => theme.boxShadow.card + ' ' + theme.color.cardBoxShadow};
    }
`;

// Props: height
export const SingleCardContainer = styled(CardContainer)`
    width: ${({theme}) => theme.cardSize.writingWidth};
    margin-right: ${({theme}) => theme.padding.pageHorizontal};
`; // TODO: not working ;_;

export const TextCard = styled.div`
    z-index: ${({theme}) => theme.zIndex.overlay};
    min-height: calc(100% - ${({theme}) => theme.padding.pageVertical} * 2);
    width: calc(50% - ${({theme}) => theme.padding.pageHorizontal} * 2);
    margin: 0;
    padding: ${({theme}) => theme.padding.pageVertical}
        ${({theme}) => theme.padding.pageHorizontal} 
        calc(${({theme}) => theme.padding.pageVertical} * 2);
    text-align: left;
`;

export const SingleTextCard = styled(TextCard)`
    width: 100%;
    min-height: fit-content;
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
    outline: ${({theme}) => [
        theme.outlineWidth.card, 
        theme.outlineType.card, 
        theme.color.outline
    ].join(' ')};
`;

export const CardsGrid = styled.div`
    margin: 0;
    padding: ${({theme}) => theme.padding.pageVertical} 0;
    text-align: center;
`;

export const SingleCardsGrid = styled(CardsGrid)`
    display: flex;
    max-width: 100%;
`;