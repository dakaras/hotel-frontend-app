import React from 'react'
import {connect} from 'react-redux'
import Login from './Login.js'
import Logout from './Logout.js'

const Navbar = ({currentGuest}) => {
    console.log(currentGuest)

    return (
       <div className='navbar'>
        {currentGuest ? `Welcome, ${currentGuest.attributes.name}!` : ""}
        {currentGuest ? <Logout/> : <Login/>}
       </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentGuest: state.currentGuest
  }
}
export default connect(mapStateToProps)(Navbar)