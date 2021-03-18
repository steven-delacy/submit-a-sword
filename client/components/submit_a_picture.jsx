import React from 'react'

import { connect } from 'react-redux'
import { loginUser, loginError } from '../actions/auth'
import Login from './Login'

class application extends React.Component {

     



    render() {
        return(
            <div className="app-container">
                .
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
      auth
    }
  }

export default application(mapStateToProps)(Login)