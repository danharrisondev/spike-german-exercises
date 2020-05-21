import React, { Component } from "react";
import styled from "styled-components";

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

const Cards = [
  {
    question: "Ich esse de_ Kuchen",
    answer: "Ich esse den Kuchen"
  },
  {
    question: "Ich habe ein gemütlich__ Wohnzimmer",
    answer: "Ich habe ein gemütliches Wohnzimmer"
  },
  {
    question: "Ich will ___ Eis essen",
    answer: "Ich will ein Eis essen"
  }
];

export default class Flashcards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answerRevealed: false,
      cardIndex: 0,
      card: Cards[0]
    };
  }

  next() {
    var cardIndex = this.state.cardIndex + 1;
    this.setState({
      card: Cards[cardIndex],
      cardIndex,
      answerRevealed: false
    });
  }

  previous() {
    var cardIndex = this.state.cardIndex - 1;
    this.setState({
      card: Cards[cardIndex],
      cardIndex,
      answerRevealed: false
    });
  }

  reveal() {
    this.setState({
      answerRevealed: true
    });
  }

  render() {
    const { card, answerRevealed } = this.state;
    return (
      <GameContainer>
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

        <button onClick={this.previous.bind(this)}>Previous</button>
        <button onClick={this.reveal.bind(this)}>Reveal Answer</button>
        <button onClick={this.next.bind(this)}>Next</button>
      </GameContainer>
    );
  }
}
