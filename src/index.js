import React from 'react';
import ReactDOM from 'react-dom';
import FlashcardApp from './FlashcardApp';

window.flashcards = {
    startArticlesGame: (selector) => {
        const wrapper = document.querySelector(selector);
        ReactDOM.render(<FlashcardApp />, wrapper);
    }
};
