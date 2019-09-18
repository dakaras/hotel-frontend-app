import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'

const Login = ({username, password, updateLoginForm}) => {
    return (
        <form>
            <input type='text' placeHolder='Username' onChange={updateLoginForm} value={username} name="Username"/>
            <input type='text' placeHolder='Password' onChange={updateLoginForm} value={password} name="Password"/>
            <input type='submit' value='Login'/>

        </form>
    )
}

const mapStateToProps =  state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}

export default connect(mapStateToProps, {updateLoginForm: updateLoginForm})(Login)