import styled from 'styled-components';

import { NAV_HEIGHT } from './Nav';

export const PageContainer = styled.main`
    max-width: ${(props) => props.theme.maxWidth.page}px;
    position: relative;
    margin: auto;
    padding: calc(${NAV_HEIGHT} + 16px)
        ${(props) => props.theme.padding.pageHorizontal}px
        ${(props) => props.theme.padding.pageVertical}px;
`