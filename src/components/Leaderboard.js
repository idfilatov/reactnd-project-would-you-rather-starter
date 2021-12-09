import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import LeaderboardUserCard from './LeaderboardUserCard';

class Leaderboard extends React.Component {
    componentDidMount() {
        console.log('Leaderboard just mounted');
    }

    render() {
        return (
            <div>
                There is Leaderboard page. You're authorized
                <ul type="1">
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
    var users = Object.values(users);
    users = users.sort((a, b) => ((Object.values(b.answers).length + (b.questions.length)) - (Object.values(a.answers).length + (a.questions.length))));
    return {
        rating: users
    }
}

export default connect(mapStateToProps)(Leaderboard)