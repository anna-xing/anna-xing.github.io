import styled from 'styled-components';

import { NAV_HEIGHT } from './Nav';

export const BannerContainer = styled.div`
    padding: calc(36px + ${NAV_HEIGHT}) 0 42px;
    max-width: 600px;
    margin: auto;
`;