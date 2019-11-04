import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'
import { FaBars } from "react-icons/fa";

const Navbar = ({currentGuest}) => {
    return (
       <div className='navbar'>
         <NavLink exact activeClassName='active' to='/reservations'>Reservations  |</NavLink>
         <NavLink exact activeClassName='active' to='/rooms'>Make a Reservation</NavLink>
         {!!currentGuest ? <h4 id='loggedin'>Logged in as: {currentGuest.attributes.name}<Logout/> </h4>: null}
       <FaBars className='menu'/>
       </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentGuest: state.currentGuest
  }
}
export default connect(mapStateToProps)(Navbar)