import React from 'react';
import ReactDOM from 'react-dom';
import SelectTheArticleGame from './MultipleChoice/SelectTheArticle';
import SelectTheGenderGame from './MultipleChoice/SelectTheGender';
import CompleteTheAdjectiveGame from './MultipleChoice/CompleteTheAdjective';

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
