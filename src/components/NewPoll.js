import React from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/shared'

class Poll extends React.Component {

    state = {
        optionOneText: '',
        optionTwoText: ''
    }

    handleChangeOptionOneText = (e) => {
        const text = e.target.value;
        this.setState({
            optionOneText: text
        })
    }

    handleChangeOptionTwoText = (e) => {
        const text = e.target.value;
        this.setState({
            optionTwoText: text
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const optionOneText = this.state.optionOneText;
        const optionTwoText = this.state.optionTwoText;
        const authedUserId = this.state.authedUserId;
        // console.group('ADD NEW QUESTION');
        // console.log('Aythor: ', authedUserId);
        // console.log('Option one: ', optionOneText);
        // console.log('Option two: ', optionTwoText);
        // console.groupEnd();

        this.props.dispatch(handleAddQuestion(optionOneText, optionTwoText))

        this.setState({
            optionOneText: '',
            optionTwoText: ''
        })
    }

    render() {
        const { optionOneText, optionTwoText } = this.state;
        return (
            <div>
                <div className='new-q-header'>
                    <strong>Create New Question</strong>
                </div >
                <div className='new-q-body'>
                    Complete the question
                    <form
                        className='new-q-form'
                        onSubmit={this.handleSubmit}
                    >
                        <input
                            type='text'
                            placeholder='Option One'
                            value={optionOneText}
                            onChange={this.handleChangeOptionOneText}
                            className='option-input'
                        />
                        <input
                            type='text'
                            placeholder='Option Two'
                            value={optionTwoText}
                            onChange={this.handleChangeOptionTwoText}
                            className='option-input'
                        />
                        <button
                            className='btn'
                            type='submit'
                            disabled={optionOneText === '' || optionTwoText === ''}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUserId: authedUser,
    }
}

export default connect(mapStateToProps)(Poll)