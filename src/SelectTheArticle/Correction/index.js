import React from 'react';
import styled from 'styled-components';
import {string, func} from 'prop-types';

const Centered = styled.div`
    text-align: center;
`;

const Button = styled.button`
    padding: 10px 20px;
`;

const Correction = ({question, answer, onContinue}) => (
    <div>
        <h3>Wrong!</h3>
        <p>The correct answer to the question '{question}' is <strong>'{answer}'</strong>.</p>
        <Centered>
            <Button onClick={onContinue}>Ups!</Button>
        </Centered>
    </div>
);

Correction.propTypes = {
    question: string.isRequired,
    answer: string.isRequired,
    onContinue: func.isRequired
};

export default Correction;