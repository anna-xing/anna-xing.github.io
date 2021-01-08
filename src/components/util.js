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

export const debounce = (func, wait, immediate) => {
    let timeout;
    return function() {
        let context = this;
        let args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};