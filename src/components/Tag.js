import styled from 'styled-components';

export const Tag = styled.div`
    background-color: ${({theme}) => theme.color.textPrimary};
    width: fit-content;
    padding: ${({theme}) => theme.padding.tagVertical + ' ' + theme.padding.tagHorizontal};
    margin: ${({theme}) => theme.padding.tagVertical + ' ' + theme.padding.tagVertical + ' 0 0'};
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;