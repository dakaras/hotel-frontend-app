import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/currentGuest'

const Login = ({loginFormData, updateLoginForm, login, history}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Username' 
            onChange={handleInputChange} 
            value={loginFormData.username} name="username"/>
            <input 
            type='text' 
            placeholder='Password' 
            onChange ={handleInputChange}
            value={loginFormData.password} name="password"/>
            <input type='submit' value='Login'/>
        </form>
    )
}

const mapStateToProps =  state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)