import React from 'react';
import styled from 'styled-components';
import {func} from 'prop-types';

const Centered = styled.div`
    text-align: center;
`;

const Button = styled.button`
    padding: 10px 20px;
`;

const Instructions = ({begin}) => (
    <div>
        <p>This is a simple flashcard game that will test your knowledge of the gender of certain nouns found in German. You will be asked a series of questions and you must try to answer them as best you can. Any questions that you get wrong you will be asked again until there are no questions remaining. The purpose of this exercise is to prepare you for the next game where you must identify a noun's case in a sentence.</p>
        <Centered>
            <Button onClick={begin}>Begin</Button>
        </Centered>
    </div>
);

Instructions.propTypes = {
    begin: func.isRequired
};

export default Instructions;