import React, { Component, Fragment } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleInitialData, receiveUsersToLogin } from '../actions/shared'

class Login extends Component {
    // componentDidMount() {
    // this.props.dispatch(handleInitialData())
    // this.props.dispatch(receiveUsersToLogin())
    // }

    render() {
        const usersToLogin = this.props.usersToLogin;
        console.log('usersToLogin len: ', usersToLogin.length);
        console.log('usersToLogin: ', usersToLogin);
        return (
            <div>
                There is no authed user.Login page
                < br ></br >
                Choose user.
                {
                    this.props.loading
                        ? null :
                        < select > {
                            usersToLogin !== {} &&
                            usersToLogin.map((user) =>
                                <option key={user.id}>{user.name}</option>)
                        }
                        </select >
                }

            </div >
        )
    }
}

function mapStateToProps({ users }) {
    return {
        loading: Object.keys(users).length === 0,
        usersToLogin: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)