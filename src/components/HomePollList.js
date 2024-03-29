import React from 'react'
import { connect } from 'react-redux'

import QuestionPreviewCard from './QuestionPreviewCard';


class HomePollList extends React.Component {

    state = {
        questionType: 'unanswered'
    }

    handleUnansweredClick = () => {
        this.setState({
            questionType: 'unanswered'
        })
    }

    handleAnsweredClick = () => {
        this.setState({
            questionType: 'answered'
        })
    }

    render() {
        return (
            <div>
                <div className='ans-unans-toggle'>
                    <button
                        disabled={this.state.questionType === 'unanswered'}
                        onClick={this.handleUnansweredClick}
                    >
                        Unanswered Questions
                    </button>
                    <button
                        disabled={this.state.questionType === 'answered'}
                        onClick={this.handleAnsweredClick}
                    >
                        Answered Questions
                    </button>

                    {this.state.questionType === 'unanswered'
                        ? <div>
                            <br></br>
                            Unanswered Questions
                        </div>
                        : <div>
                            <br></br>
                            Answered Questions
                        </div>
                    }
                </div>
                <div>
                    <ul>
                        {this.state.questionType === 'unanswered'
                            ?
                            this.props.unansweredQuestions.map((unansQ) => (
                                <li key={unansQ.id}>
                                    <QuestionPreviewCard question={unansQ} />
                                </li>
                            ))

                            :
                            this.props.answeredQuestions.map((ansQ) => (
                                <li key={ansQ.id}>
                                    <QuestionPreviewCard question={ansQ} />
                                </li>
                            ))

                        }
                    </ul>
                </div >
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    var answeredQuestions = Object.values(questions)
        .filter((question) => (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser)))
    answeredQuestions = answeredQuestions.sort((a, b) => b.timestamp - a.timestamp);

    var unAnsweredQuestions = Object.values(questions)
        .filter((question) => (!question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)))
    unAnsweredQuestions = unAnsweredQuestions.sort((a, b) => b.timestamp - a.timestamp);

    return {
        loading: Object.keys(users).length === 0,
        authedUserId: authedUser,
        answeredQuestions: answeredQuestions,
        unansweredQuestions: unAnsweredQuestions
    }
}

export default connect(mapStateToProps)(HomePollList)