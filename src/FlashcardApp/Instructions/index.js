import React from 'react';
import {func} from 'prop-types';

const Instructions = ({begin}) => (
    <div className="instructions">
        <p>This is a simple flashcard game that will test your knowledge of the German cases. You will be asked a series of questions and you must try to answer them as best you can. Any questions that you get wrong you will be re-asked until there are no questions remaining. This is one simple way to memorise the German cases.</p>
        <button onClick={begin}>Begin</button>
    </div>
);

Instructions.propTypes = {
    begin: func.isRequired
};

export default Instructions;