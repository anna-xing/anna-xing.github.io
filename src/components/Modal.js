import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PageDiv = styled.div`
    height: 100vh;
    width: 100%;
    text-align: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
`;

const ModalImg = styled.img`
    height: 90vh;
    margin: 5vh 0;
    width: auto;
    outline: ${({theme}) => [
        theme.outlineWidth.card, 
        theme.outlineType.card, 
        theme.color.outline
    ].join(' ')};
`;

export const Modal = ({img}) => {
    const ModalElem = (
        <PageDiv>
            <ModalImg src={img} />
        </PageDiv>
    );

    return ReactDOM.createPortal(ModalElem, document.querySelector('#modal'));
};