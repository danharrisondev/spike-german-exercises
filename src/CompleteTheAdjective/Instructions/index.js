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
        <p>This is a game where you complete the adjective in the sentence. Pay attention to the correct ending.</p>
        <Centered>
            <Button onClick={begin}>Begin</Button>
        </Centered>
    </div>
);

Instructions.propTypes = {
    begin: func.isRequired
};

export default Instructions;