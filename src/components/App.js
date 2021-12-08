import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { handleInitialData, receiveUsersToLogin } from '../actions/shared'

import LoadingBar from 'react-redux-loading'
import Login from './Login'
import HomePollList from './HomePollList'
import Poll from './Poll'
import NewPoll from './NewPoll'
import Leaderboard from './Leaderboard'
import Nav from './Nav'

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
        // this.props.dispatch(receiveUsersToLogin())
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />
                    <div>
                        <Nav />
                        {this.props.NotAuthentificatedUser
                            ? <Login />
                            : <div>
                                <Routes>
                                    <Route path='/' exact element={<HomePollList />} />
                                    <Route path='/questions/:question_id' element={<Poll />} />
                                    <Route path='/add' element={<NewPoll />} />
                                    <Route path='/leaderboard' element={<Leaderboard />} />
                                </Routes>
                            </div>
                        }
                    </div>
                </Fragment>
            </Router>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        NotAuthentificatedUser: authedUser === null
    }
}

export default connect(mapStateToProps)(App)
