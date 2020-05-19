import React from 'react';
import styled from 'styled-components';
import {string, array, func} from 'prop-types';

const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    padding: 32px;
    text-align: center;
`;

const Button = styled.button`
    appearance: none;
    margin: 0 5px;
    padding: 10px 20px;
    background: #4cb52a;
    border: 1px solid #224d1f;
    border-radius: 2px;
    font-weight: bold;
    color: #fff;
    transition: background 0.3s;

    &:hover {
        background: #3d9421;
    }
`;

const Card = ({question, answer, options, success, fail}) => (
    <Container>
        <h3>{question}</h3>
        <div>
            {options.map(o => o === answer 
                ? <Button key={o} onClick={success}>{o}</Button>
                : <Button key={o} onClick={fail}>{o}</Button>)}
        </div>
    </Container>
);

Card.propTypes = {
    question: string.isRequired,
    answer: string.isRequired,
    options: array.isRequired,
    success: func.isRequired,
    fail: func.isRequired,
}

export default Card;