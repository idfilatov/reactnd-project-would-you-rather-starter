import React from 'react'
import { connect } from 'react-redux'


class QuestionPreviewCard extends React.Component {
    render() {
        const { question } = this.props;
        return (
            <div>
                {question.author} asks:
            </div>
        )
    }
}

// function mapStateToProps({ users, questions, authedUser }) {
//     return {
//         loading: Object.keys(users).length === 0,
//         authedUserId: authedUser,
//         // answeredQuestions: Object.values(questions)
//         answeredQuestions: Object.values(questions).filter((question) => (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))),
//         unansweredQuestions: Object.values(questions).filter((question) => (!question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)))
//     }
// }

export default connect()(QuestionPreviewCard)