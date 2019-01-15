import React from 'react';
import {string, array, func} from 'prop-types';

const Card = ({question, answer, options, success, fail}) => (
    <div className="card">
        <h3>{question}</h3>
        <div className="options">
            {options.map(o => o === answer 
                ? <button key={o} onClick={success}>{o}</button>
                : <button key={o} onClick={fail}>{o}</button>)}
        </div>
    </div>
);

Card.propTypes = {
    question: string.isRequired,
    answer: string.isRequired,
    options: array.isRequired,
    success: func.isRequired,
    fail: func.isRequired,
}

export default Card;