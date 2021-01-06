import styled from 'styled-components';

export const TextLink = styled.a`
    color: ${({theme}) => theme.color.textSecondary};
    font-family: ${({theme}) => theme.fontFamily.body};
    font-size: inherit;

    &:hover {
        color: ${({theme}) => theme.color.textAccent};
        transition: ${({theme}) => theme.transition.color};
    }
`;