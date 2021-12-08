import React, { Component } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    // componentDidMount() {
    // this.props.dispatch(handleInitialData())
    // this.props.dispatch(receiveUsersToLogin())
    // }


    handleLoginButton = () => {
        const chosenUserName = document.getElementById('selectUser').value;
        const chosenUserId = this.props.usersToLogin.filter((user) => user.name === chosenUserName)[0].id;
        console.log('chosenUser: ', chosenUserName, chosenUserId);
        this.props.dispatch(setAuthedUser(chosenUserId));
    }

    render() {
        const usersToLogin = this.props.usersToLogin;
        console.log('usersToLogin len: ', usersToLogin.length);
        console.log('usersToLogin: ', usersToLogin);
        return (
            <div>
                {
                    this.props.loading
                        ? null : <div>
                            There is no authed user.Login page
                            < br ></br >
                            Choose user.
                            < select id='selectUser'> {
                                usersToLogin !== {} &&
                                usersToLogin.map((user) =>
                                    <option key={user.id}>{user.name}</option>)
                            }
                            </select >
                            <button onClick={this.handleLoginButton}>Login</button>
                        </div>
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