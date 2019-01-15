import React from 'react';
import shuffle from 'lodash.shuffle';
import Instructions from './Instructions';
import Card from './Card';
import Correction from './Correction';
import ArticleCards from './Data';
import Finished from './Finished';

class FlashcardApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            begun: false,
            showingCorrection: false,
            cards: shuffle(ArticleCards.slice(0))
        };

        this.begin = this.begin.bind(this);
        this.success = this.success.bind(this);
        this.fail = this.fail.bind(this);
        this.moveCurrentCardToEnd = this.moveCurrentCardToEnd.bind(this);
        this.restart = this.restart.bind(this);
    }

    begin() {
        this.setState({
            begun: true
        });
    }

    success() {
        this.setState({
            cards: this.state.cards.slice(1)
        });
    }

    fail() {
        this.setState({
            showingCorrection: true
        });
    }

    moveCurrentCardToEnd() {
        const currentCard = this.state.cards[0];
        this.setState({
            cards: this.state.cards.slice(1).concat(currentCard),
            showingCorrection: false
        });
    }

    restart() {
        this.setState({
            begun: false,
            showingCorrection: false,
            cards: shuffle(ArticleCards.slice(0))
        });
    }

    render() {
        const {begun, cards, showingCorrection} = this.state;
        return (
            <div className="minigame">
                {begun && !showingCorrection && cards.length > 0 && <Card {...cards[0]} success={this.success} fail={this.fail} />}
                {begun && !showingCorrection && cards.length === 0 && <Finished onRestart={this.restart} />}
                {!begun && !showingCorrection && <Instructions begin={this.begin} />}
                {begun && showingCorrection && <Correction {...cards[0]} onContinue={this.moveCurrentCardToEnd} />}
            </div>
        );
    }
}

export default FlashcardApp;