import React from 'react';
import {string, func} from 'prop-types';

const Correction = ({question, answer, onContinue}) => (
    <div className="correction">
        <h3>Wrong!</h3>
        <p>The correct answer to the question '{question}' is <strong>'{answer}'</strong>.</p>
        <button onClick={onContinue}>Ups!</button>
    </div>
);

Correction.propTypes = {
    question: string.isRequired,
    answer: string.isRequired,
    onContinue: func.isRequired
};

export default Correction;