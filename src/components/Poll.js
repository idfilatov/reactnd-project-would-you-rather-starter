import React from 'react'
import { connect } from 'react-redux'

import UnAnsweredQuestion from './UnAnsweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';


class Poll extends React.Component {
    render() {
        const is_question_exists = this.props.is_question_exists;
        const needToAnswer = this.props.needToAnswer;
        const authorObject = this.props.authorObject;
        const authed = this.props.authedUserId;

        return (
            <div>
                {is_question_exists
                    ?
                    <div className='card'>
                        <div className='card-header'>At {String(new Date(this.props.question_itself.timestamp)).split('GMT')[0]} {authorObject.name} asks:</div>
                        <div className='card-body'>
                            <div className='poll-card-avatar'>
                                <img src={authorObject.avatarURL} width={100} alt='author_avatar' />
                            </div>
                            {needToAnswer
                                ? <UnAnsweredQuestion question={this.props.question_itself} you={authed} />
                                : <AnsweredQuestion question={this.props.question_itself} you={authed} />
                            }

                        </div>
                    </div>
                    : <div>404. Question doesn't exists</div>
                }
            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, props) {
    const question_id = props.match.params.question_id;
    const is_question_exists = Object.keys(questions).includes(question_id);
    const question_itself = is_question_exists ? Object.values(questions).filter((q) => q.id === question_id)[0] : null;
    const needToAnswer = is_question_exists ? !(question_itself.optionOne.votes.includes(authedUser) || question_itself.optionTwo.votes.includes(authedUser)) : null;
    const authorObject = is_question_exists ? Object.values(users).filter((user) => (user.id === question_itself.author))[0] : null;

    return {
        question_id: question_id,
        authedUserId: authedUser,
        question_itself: question_itself,
        authorObject: authorObject,
        needToAnswer: needToAnswer,
        is_question_exists: is_question_exists,
        loading: Object.keys(users).length === 0
    }
}

export default connect(mapStateToProps)(Poll)