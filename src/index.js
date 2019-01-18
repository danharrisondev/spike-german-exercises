import React from 'react';
import ReactDOM from 'react-dom';
import SelectTheArticleGame from './SelectTheArticle';

window.flashcards = {
    startSelectTheArticleGame: (selector) => {
        const wrapper = document.querySelector(selector);
        ReactDOM.render(<SelectTheArticleGame />, wrapper);
    }
};
