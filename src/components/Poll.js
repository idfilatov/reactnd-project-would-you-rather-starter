import React from 'react'
import { connect } from 'react-redux'

import UnAnsweredQuestion from './UnAnsweredQuestion';

function Option(props) {
    return (
        <div>
            {props.choice
                ? <p><strong>{props.text}</strong> (your choice)</p>
                : <p>{props.text}</p>
            }
        </div>
    )
}

function AnsweredQuestion(props) {
    const { question, you } = props;
    const total_votes = question.optionOne.votes.length + question.optionTwo.votes.length;
    const votes1 = question.optionOne.votes.length;
    const votes2 = question.optionTwo.votes.length;
    return (
        <div className='poll-card-info'>
            Results
            <br></br>
            <div>
                <Option text={question.optionOne.text} choice={question.optionOne.votes.includes(you)} />
            </div>

            <br></br>
            {votes1} of {total_votes} votes
            <br></br>
            <div>
                <Option text={question.optionTwo.text} choice={question.optionTwo.votes.includes(you)} />
            </div>

            <br></br>
            {votes2} of {total_votes} votes
        </div>
    )
}


class Poll extends React.Component {
    componentDidMount() {
        console.log('authorObject avatar: ', this.props.authorObject.avatarURL);
    }

    render() {
        const needToAnswer = this.props.needToAnswer;
        // console.log('needToAnswer: ', needToAnswer);
        const authorObject = this.props.authorObject;
        const question = this.props.question_itself;
        const authed = this.props.authedUserId;

        const question_raw_timestamp = question.timestamp;
        const datetime = String(new Date(question_raw_timestamp)).split('GMT')[0];
        return (
            <div className='poll-card'>
                <div className='poll-card-header'>At {datetime} {authorObject.name} asks:</div>
                <div className='poll-card-body'>
                    <div className='poll-card-avatar'>
                        <img src={authorObject.avatarURL} width={100} alt='author_avatar' />
                    </div>
                    {needToAnswer
                        ? <UnAnsweredQuestion question={question} you={authed} />
                        : <AnsweredQuestion question={question} you={authed} />
                    }

                </div>



            </div>
        )
    }
}

function mapStateToProps({ users, questions, authedUser }, props) {
    const question_id = props.match.params.question_id;
    const question_itself = Object.values(questions).filter((q) => q.id === question_id)[0];
    const needToAnswer = !(question_itself.optionOne.votes.includes(authedUser) || question_itself.optionTwo.votes.includes(authedUser));

    const authorObject = Object.values(users).filter((user) => (user.id === question_itself.author))[0];
    return {
        question_id: question_id,
        authedUserId: authedUser,
        question_itself: question_itself,
        authorObject: authorObject,
        needToAnswer: needToAnswer,
        loading: Object.keys(users).length === 0
    }
}

export default connect(mapStateToProps)(Poll)