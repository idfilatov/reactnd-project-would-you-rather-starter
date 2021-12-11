import React from 'react'
import { connect } from 'react-redux'

import { handleAddQuestionAnswer } from '../actions/shared'

class UnAnsweredQuestion extends React.Component {

    state = {
        option: 'optionOne'
    }

    toggleOptionOne = () => {
        this.setState({
            option: 'optionOne'
        })
    }
    toggleOptionTwo = () => {
        this.setState({
            option: 'optionTwo'
        })
    }

    handleSubmitAnswer = (e) => {
        e.preventDefault();
        const question_id = this.props.question.id;
        const option = this.state.option;
        const userId = this.props.you

        this.props.dispatch(handleAddQuestionAnswer(question_id, option, userId))
    }

    render() {
        const { question } = this.props;
        return (
            <div className='poll-card-info'>
                Would you rather...
                <form onSubmit={this.handleSubmitAnswer}>
                    <input
                        type="radio"
                        value="optionOne"
                        checked={this.state.option === "optionOne"}
                        onChange={this.toggleOptionOne}
                    />
                    {question.optionOne.text}
                    <br></br>
                    <input
                        type="radio"
                        value="optionTwo"
                        checked={this.state.option === "optionTwo"}
                        onChange={this.toggleOptionTwo}
                    />
                    {question.optionTwo.text}
                    <br></br>
                    <button>Submit answer</button>
                </form>
            </div>
        )
    }
}

export default connect()(UnAnsweredQuestion)