import React from 'react';
import {func} from 'prop-types';

const Finished = ({onRestart}) => (
    <div className="finished screen">
        <h3>Finished!</h3>
        <p>Well done, now you can start again from the beginning. Repetition is the key!</p>
        <button type="button" onClick={onRestart}>Restart</button>
    </div>
);

Finished.propTypes = {
    onRestart: func.isRequired
};

export default Finished;