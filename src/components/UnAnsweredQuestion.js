import React from 'react'
import { connect } from 'react-redux'

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
        console.group('QUESTION ANSWER');
        console.log('user id: ', this.props.you);
        console.log('chosen: ', this.state.option);
        console.groupEnd();
    }

    render() {
        const { question, you } = this.props;
        return (
            <div className='poll-card-info'>
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