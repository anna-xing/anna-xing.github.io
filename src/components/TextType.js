import styled from 'styled-components';

export const BannerText = styled.h1`
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: ${(props) => props.theme.fontSize.xl};
    color: ${(props) => props.theme.color.textPrimary};
    margin: 0;
    padding: 0;
    line-height: ${(props) => props.theme.fontSize.xl};
`;

export const HeadingText = styled.h2`
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: ${(props) => props.theme.fontSize.large};
    color: ${(props) => props.theme.color.textPrimary};
    margin: ${({theme}) => theme.fontSize.small} 0;
    padding: 0;
    line-height: ${(props) => props.theme.fontSize.large};
`;

export const SubheadingText = styled.h3`
    font-family: ${(props) => props.theme.fontFamily.heading};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.color.textPrimary};
    margin: ${({theme}) => theme.fontSize.medium};
    padding: 0;
    line-height: ${(props) => props.theme.fontSize.medium};
`;

export const BodyText = styled.p`
    font-family: ${(props) => props.theme.fontFamily.body};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.color.textPrimary};
    margin: ${({theme}) => theme.fontSize.small} 0;
    padding: 0;
`;

// To avoid nesting <p> elements
export const BodyTextSpan = styled.span`
    font-family: ${(props) => props.theme.fontFamily.body};
    font-size: ${(props) => props.theme.fontSize.medium};
    color: ${(props) => props.theme.color.textPrimary};
    margin: ${({theme}) => theme.fontSize.small} 0;
    padding: 0;
    display: inline;
`;

export const TagText = styled.p`
    font-family: ${({theme}) => theme.fontFamily.tag};
    font-size: ${({theme}) => theme.fontSize.xs};
    color: ${({theme}) => theme.color.backgroundPrimary};
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
    padding: 0;
    letter-spacing: 1px;
`;
