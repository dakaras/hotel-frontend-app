import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm'
import {signup} from '../actions/currentGuest'

const Signup = ({signupFormData, updateSignupForm, signup}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='Name' 
            onChange={handleInputChange} 
            value={signupFormData.name} name="name"/>
            <input 
            type='text' 
            placeholder='Username' 
            onChange={handleInputChange} 
            value={signupFormData.username} name="username"/>
            <input 
            type='text' 
            placeholder='Password' 
            onChange ={handleInputChange}
            value={signupFormData.password} name="password"/>
            <input type='submit' value='Sign Up'/>
        </form>
    )
}

const mapStateToProps =  state => {
    return {
        signupFormData: state.signupForm,
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)