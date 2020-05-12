import React from 'react';
import ReactDOM from 'react-dom';
import SelectTheArticleGame from './SelectTheArticle';
import SelectTheGenderGame from './SelectTheGender';
import CompleteTheAdjectiveGame from './CompleteTheAdjective';

window.flashcards = {
    startSelectTheArticleGame: (selector) => {
        const wrapper = document.querySelector(selector);
        ReactDOM.render(<SelectTheArticleGame />, wrapper);
    },
    startSelectTheGenderGame: (selector) => {
        const wrapper = document.querySelector(selector);
        ReactDOM.render(<SelectTheGenderGame />, wrapper);
    },
    startCompleteTheAdjectiveGame: (selector) => {
        const wrapper = document.querySelector(selector);
        ReactDOM.render(<CompleteTheAdjectiveGame />, wrapper);
    }
};
