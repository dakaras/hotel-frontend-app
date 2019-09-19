import React from 'react'
import {connect} from 'react-redux'
import {logout} from '../actions/currentGuest'

const Logout = ({ logout}) => {

    return (
        <form onSubmit={logout}>
            <input type='submit' value='Logout'/>
        </form>
    )
}


export default connect(null, {logout})(Logout)