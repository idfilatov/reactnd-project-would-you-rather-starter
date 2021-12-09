import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from "react-router-dom";


class QuestionPreviewCard extends React.Component {

    viewFullPoll = (e, id) => {
        e.preventDefault();
        this.props.history.push(`/questions/${id}`);
    }

    render() {
        const { question } = this.props;
        const questionId = question.id;
        const authorId = question.author;
        const authorObject = Object.values(this.props.users).filter((user) => (user.id === authorId))[0];
        const previewText = question.optionOne.text.split(" ")[0];

        const question_raw_timestamp = question.timestamp;
        const datetime = String(new Date(question_raw_timestamp)).split('GMT')[0];
        // console.log('question_raw_timestamp: ', question_raw_timestamp);
        // console.log('datetime: ', datetime);

        return (
            <div className='question-preview-card'>
                <div className='question-preview-card-header'>At {datetime} {authorObject.name} asks:</div>
                <div className='question-preview-card-body'>
                    <div className='question-preview-card-avatar'>
                        <img src={authorObject.avatarURL} width={100} alt='avatar' />
                    </div>
                    <div className='question-preview-card-info'>
                        Would you rather...
                        <br></br>
                        <br></br>
                        <strong><i>... {previewText} ...</i></strong>
                        <br></br>
                        <br></br>
                        <button onClick={(e) => this.viewFullPoll(e, questionId)}>View question</button>
                    </div>

                </div>



            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: users
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPreviewCard))