import React from 'react'
import { connect } from 'react-redux'

import LeaderboardUserCard from './LeaderboardUserCard';

class Leaderboard extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.rating.map((user) => (
                        <li key={user.id}>
                            <LeaderboardUserCard user={user} />
                        </li>
                    )
                    )}
                </ul>
            </div >
        )
    }
}

function mapStateToProps({ users }) {
    return {
        rating: Object.values(users).sort((a, b) => ((Object.values(b.answers).length + (b.questions.length)) - (Object.values(a.answers).length + (a.questions.length))))
    }
}

export default connect(mapStateToProps)(Leaderboard)