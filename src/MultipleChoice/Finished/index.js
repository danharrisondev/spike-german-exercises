import React from 'react';
import styled from 'styled-components';
import {func} from 'prop-types';

const Centered = styled.div`
    text-align: center;
`;

const Button = styled.button`
    padding: 10px 20px;
`;

const Finished = ({onRestart}) => (
    <div>
        <h3>Finished!</h3>
        <p>Well done, now you can start again from the beginning. Repetition is the key!</p>
        <Centered>
            <Button onClick={onRestart}>Restart</Button>
        </Centered>
    </div>
);

Finished.propTypes = {
    onRestart: func.isRequired
};

export default Finished;