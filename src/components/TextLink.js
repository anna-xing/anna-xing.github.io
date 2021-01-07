import styled from 'styled-components';

import { colourChangeWrapper } from './util';

export const TextLink = colourChangeWrapper(styled.a`
    color: ${({theme}) => theme.color.textSecondary};
    font-family: ${({theme}) => theme.fontFamily.body};
    font-size: inherit;
`);