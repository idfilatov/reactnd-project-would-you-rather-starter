import React from 'react'
import { connect } from 'react-redux'


class LeaderboardUserCard extends React.Component {


    render() {
        const { user } = this.props;
        const questionsCreated = user.questions.length;
        const questionsAnswered = Object.values(user.answers).length;
        const total = questionsCreated + questionsAnswered;

        return (
            <div className='leaderboard-card'>
                <div className='leaderboard-card-header'>{user.name}</div>
                <div className='leaderboard-card-body'>
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
}

// function mapStateToProps({ users }) {
//     return {
//         users: users
//     }
// }

export default connect()(LeaderboardUserCard)