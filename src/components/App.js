import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { withRouter } from "react-router";
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

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
                            : <div className='main'>

                                <Route path='/' exact component={HomePollList} />
                                <Route path='/questions/:question_id' component={Poll} />
                                <Route path='/add' component={NewPoll} />
                                <Route path='/leaderboard' component={Leaderboard} />

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
