import styled from 'styled-components';

export const TextLink = styled.a`
    color: ${({theme}) => theme.color.textAccent};
    font-family: ${({theme}) => theme.fontFamily.body};
    font-size: inherit;
`;