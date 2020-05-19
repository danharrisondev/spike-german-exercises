import React from 'react';
import styled from 'styled-components';
import { string, array, func } from 'prop-types';

const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    padding: 32px;
    text-align: center;
`;

const Button = styled.button`
    margin: 0 5px;
    padding: 10px 20px;
`;

class MultipleEntryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    getLeadingPart() {
        return this.props.question.substring(
            0,
            this.props.question.indexOf("__________") - 1
        );
    }

    getTrailingPart() {
        return this.props.question.substring(
            this.props.question.indexOf("__________") + 11
        );
    }

    handleTextChanged(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSubmit() {
        if (this.state.text === this.props.answer) {
            this.setState({
                text: ''
            }, () => {
                this.props.success();
            });
        } else {
            this.setState({
                text: ''
            }, () => {
                this.props.fail();
            });
        }
    }

    render() {
        return (
            <Container>
                <h3>
                    {this.getLeadingPart()}
                    <input type="text" onChange={this.handleTextChanged.bind(this)} value={this.state.text} />
                    {this.getTrailingPart()}
                </h3>
                <Button onClick={this.handleSubmit.bind(this)}>Submit</Button>
            </Container>
        );
    }
}

MultipleEntryCard.propTypes = {
    question: string.isRequired,
    answer: string.isRequired,
    options: array.isRequired,
    success: func.isRequired,
    fail: func.isRequired,
}

export default MultipleEntryCard;