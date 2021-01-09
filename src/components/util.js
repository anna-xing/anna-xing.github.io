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

export const tileCards = (list1, list2) => {
    let finalList = [list1.shift()];
    let minLength = Math.min(list1.length, list2.length);
    
    for (let i = 0; i < Math.floor(minLength / 2) + 1; i++) {
        finalList.push(list2.shift());
        finalList.push(list2.shift());
        finalList.push(list1.shift());
        finalList.push(list1.shift());
    }

    if (list1) finalList = finalList.concat(list1);
    if (list2) finalList = finalList.concat(list2);

    return finalList;
    
}