import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import { setAuthedUser } from '../actions/authedUser'

class Nav extends React.Component {
    // componentDidMount() {
    // this.props.dispatch(handleInitialData())
    // this.props.dispatch(receiveUsersToLogin())
    // }

    handleLogOut = () => {
        this.props.dispatch(setAuthedUser(null));
        // <Navigate to='/' />;
        // this.props.history.push('/');
    }

    render() {

        console.log('NotAuthentificatedUser from Nav: ', this.props.NotAuthentificatedUser);

        const authedUserId = this.props.authedUserId;


        const currentUser = !this.props.NotAuthentificatedUser &&
            Object.values(this.props.users).filter((user) => user.id === authedUserId)[0];

        console.log('currentUser.avatarURL: ', currentUser.avatarURL);

        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' end='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' end='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' end='active'>
                            Leaderboard
                        </NavLink>
                    </li>
                    <li>
                        {this.props.NotAuthentificatedUser
                            ? null
                            : <div>
                                <strong><i>Hello, {currentUser.name}</i></strong>
                                <img src={currentUser.avatarURL} width={100} height={100} alt='avatar' />
                            </div>
                        }
                    </li>
                    <li>
                        {this.props.NotAuthentificatedUser
                            ? null
                            :
                            <NavLink to='/' end='active'>
                                <button onClick={() => this.handleLogOut()}>
                                    Log out
                                </button>
                            </NavLink>

                        }

                    </li>
                </ul>

            </nav>
        )
    }
}

function mapStateToProps({ users, authedUser }) {
    return {
        NotAuthentificatedUser: authedUser === null,
        authedUserId: authedUser,
        users: users
    }
}

export default connect(mapStateToProps)(Nav)