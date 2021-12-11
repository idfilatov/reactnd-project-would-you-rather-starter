import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

    handleLoginButton = () => {
        const chosenUserName = document.getElementById('selectUser').value;
        const chosenUserId = this.props.usersToLogin.filter((user) => user.name === chosenUserName)[0].id;
        this.props.dispatch(setAuthedUser(chosenUserId));
    }

    render() {
        const usersToLogin = this.props.usersToLogin;

        return (
            <div>
                {
                    this.props.loading
                        ? null
                        : <div className='main'>
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