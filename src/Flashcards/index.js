import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Button";

const GameContainer = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  border: solid 1px #ccc;
  position: relative;
`;

const Face = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 200px;
  background: #fff;
`;

const Content = styled.p`
  text-align: center;
  margin-top: 85px;
`;

export default class Flashcards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerRevealed: false,
      cardIndex: 0,
      cards: [],
      card: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch(this.props.source)
      .then(response => response.json())
      .then(data => {
        this.setState({
          cards: data.cards,
          card: data.cards.length > 0 ? data.cards[0] : null,
          loading: false
        });
      });
  }

  next() {
    this.setState({
      card: this.state.cards[this.state.cardIndex + 1],
      cardIndex: this.state.cardIndex + 1,
      answerRevealed: false
    });
  }

  previous() {
    this.setState({
      card: this.state.cards[this.state.cardIndex - 1],
      cardIndex: this.state.cardIndex - 1,
      answerRevealed: false
    });
  }

  reveal() {
    this.setState({
      answerRevealed: true
    });
  }

  renderLoader() {
    return <p>Loading...</p>;
  }

  renderEmpty() {
    return <p>Card 0/0</p>;
  }

  renderCards() {
    const { card, cards, answerRevealed } = this.state;

    return (
      <React.Fragment>
        <p>
          Card {this.state.cardIndex + 1}/{cards.length}
        </p>
        <Card>
          {!answerRevealed && (
            <Face>
              <Content>{card.question}</Content>
            </Face>
          )}

          {answerRevealed && (
            <Face>
              <Content>{card.answer}</Content>
            </Face>
          )}
        </Card>

        <Button onClick={this.previous.bind(this)}>Previous</Button>
        <Button onClick={this.reveal.bind(this)}>Reveal Answer</Button>
        <Button onClick={this.next.bind(this)}>Next</Button>
      </React.Fragment>
    );
  }

  renderFlashcards() {
    return (
      <React.Fragment>
        {this.state.cards.length === 0 && this.renderEmpty()}
        {this.state.cards.length > 0 && this.renderCards()}
      </React.Fragment>
    );
  }

  render() {
    return (
      <GameContainer>
        {this.state.loading === true && this.renderLoader()}
        {this.state.loading === false && this.renderFlashcards()}
      </GameContainer>
    );
  }
}
