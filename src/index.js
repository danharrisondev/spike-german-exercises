import React from 'react';
import ReactDOM from 'react-dom';
import FlashcardApp from './FlashcardApp';

const wrapper = document.getElementById('minigame');

if (wrapper) {
    ReactDOM.render(<FlashcardApp />, wrapper);
} else {
    console.error('Could not load React German Case Minigame, missing root element #minigame')
};
