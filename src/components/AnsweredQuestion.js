import React from 'react'

function Option(props) {
    return (
        <div className='answered-stats'>
            {props.choice
                ? <div><strong>{props.text}</strong> (your choice)</div>
                : <div>{props.text}</div>
            }
            {props.votes} of {props.total} votes ({props.votes / props.total * 100} %)
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
            Results:
            <br></br>
            <div>
                <Option text={question.optionOne.text} choice={question.optionOne.votes.includes(you)} votes={votes1} total={total_votes} />
            </div>


            <div>
                <Option text={question.optionTwo.text} choice={question.optionTwo.votes.includes(you)} votes={votes2} total={total_votes} />
            </div>
        </div>
    )
}

export default AnsweredQuestion