import React from 'react'
import { connect } from 'react-redux'

import QuestionPreviewCard from './QuestionPreviewCard';


class HomePollList extends React.Component {
    componentDidMount() {
        console.log('HomePollList just mounted');
        console.log('answeredQuestions: ', this.props.answeredQuestions);
        console.log('unansweredQuestions: ', this.props.unansweredQuestions);
    }

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
                        Unanswered Questions
                    </div>
                    : <div>
                        Answered Questions
                    </div>
                }
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
        )
    }
}

function mapStateToProps({ users, questions, authedUser }) {
    return {
        loading: Object.keys(users).length === 0,
        authedUserId: authedUser,
        // answeredQuestions: Object.values(questions)
        answeredQuestions: Object.values(questions).filter((question) => (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))),
        unansweredQuestions: Object.values(questions).filter((question) => (!question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)))
    }
}

export default connect(mapStateToProps)(HomePollList)