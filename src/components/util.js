import styled from 'styled-components';

export const bounceWrapper = (comp) => {
    return styled(comp)`
        transform: translateY(0);
        transition: ${({theme}) => theme.transition.translateY};

        &:hover {
            transform: ${({theme}) => theme.transform.translateY};
            transition: ${({theme}) => theme.transition.translateY};
        }
    `;
}

export const colourChangeWrapper = (comp) => {
    return styled(comp)`
        transition: ${({theme}) => theme.transition.color};

        &:hover {
            color: ${({theme}) => theme.color.textPrimary};
            transition: ${({theme}) => theme.transition.color};
        }
    `;
}