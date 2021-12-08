import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData, receiveUsersToLogin } from '../actions/shared'

class Poll extends React.Component {
    // componentDidMount() {
    // this.props.dispatch(handleInitialData())
    // this.props.dispatch(receiveUsersToLogin())
    // }

    render() {
        return (
            <div>
                There is New Poll page. You're authorized
            </div >
        )
    }
}

function mapStateToProps({ users }) {
    return {
        loading: Object.keys(users).length === 0
    }
}

export default connect(mapStateToProps)(Poll)