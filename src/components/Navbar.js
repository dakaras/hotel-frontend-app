import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

const Navbar = ({currentGuest}) => {
     
    return (
       <div className='navbar'>
        {currentGuest ? `Welcome, ${currentGuest.name}!` : ""}
        {currentGuest ? <Logout/> : <Login/>}
       </div>
    )
}

const mapStateToProps = ({currentGuest}) => {
  return {
    currentGuest
  }
}
export default connect(mapStateToProps)(Navbar)