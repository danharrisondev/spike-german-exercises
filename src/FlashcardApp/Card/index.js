import React from 'react';
import styled from 'styled-components';
import {string, array, func} from 'prop-types';
import Button from './Button';

const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    padding: 32px;
    text-align: center;
`;

const Card = ({question, answer, options, success, fail}) => (
    <Container>
        <h3>{question}</h3>
        <div className="options">
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