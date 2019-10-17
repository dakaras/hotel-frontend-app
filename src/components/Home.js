import React from 'react'
// import Login from './Login'
// import Logout from './Logout'
// import Signup from './Signup'
import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h4>Welcome! Please <Link to='/login'>Log In</Link> or <Link to='/signup'>Sign Up</Link> to create an account.</h4>
        </div>
    )
}
