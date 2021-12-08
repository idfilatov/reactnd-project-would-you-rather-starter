import React, { Component, Fragment } from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData, receiveUsersToLogin } from '../actions/shared'

import Login from './Login'


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
    // this.props.dispatch(receiveUsersToLogin())
  }

  render() {
    return (
      <div>
        {this.props.authentificatedUser
          ? <Login />
          : <div>Starter page</div>
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authentificatedUser: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
