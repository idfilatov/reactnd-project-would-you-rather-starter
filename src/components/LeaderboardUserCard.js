import React from 'react'


function LeaderboardUserCard(props) {

    const { user } = props;
    const questionsCreated = user.questions.length;
    const questionsAnswered = Object.values(user.answers).length;
    const total = questionsCreated + questionsAnswered;

    return (
        <div className='card'>
            <div className='card-header'>{user.name}</div>
            <div className='card-body'>
                <div className='leaderboard-card-avatar'>
                    <img src={user.avatarURL} width={100} alt='avatar' />
                </div>
                <div className='leaderboard-card-info'>
                    Questions created: {questionsCreated}
                    <br></br>
                    Questions answered: {questionsAnswered}
                </div>
                <div className='leaderboard-card-score'>
                    {total}
                </div>

            </div>
        </div>
    )

}

export default LeaderboardUserCard