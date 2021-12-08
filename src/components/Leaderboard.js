import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData, receiveUsersToLogin } from '../actions/shared'

class Leaderboard extends React.Component {
    componentDidMount() {
        console.log('Leaderboard just mounted');
    }

    render() {
        return (
            <div>
                There is Leaderboard page. You're authorized
            </div >
        )
    }
}

function mapStateToProps({ users }) {
    return {
        loading: Object.keys(users).length === 0
    }
}

export default connect(mapStateToProps)(Leaderboard)