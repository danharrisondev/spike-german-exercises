import React from 'react';
import styled from 'styled-components';
import {func} from 'prop-types';
import Button from '../../../Button';

const Centered = styled.div`
    text-align: center;
`;

const Instructions = ({begin}) => (
    <div>
        <p>This is a simple flashcard game that will test your knowledge of the articles found in German. You will be asked a series of questions and you must try to answer them as best you can. Any questions that you get wrong you will be asked again until there are no questions remaining. This is one simple way to memorise the numerous articles found in German.</p>
        <Centered>
            <Button onClick={begin}>Begin</Button>
        </Centered>
    </div>
);

Instructions.propTypes = {
    begin: func.isRequired
};

export default Instructions;