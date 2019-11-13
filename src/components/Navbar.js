import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'
import { FaBars } from "react-icons/fa";

const Navbar = ({currentGuest}) => {
    return (
      <div className="topnav">
      <span className='navbar'>
        <NavLink exact activeClassName='active' to='/reservations'><strong>Reservations </strong></NavLink>
        <span id="divider">|</span>
        <NavLink exact activeClassName='active' to='/rooms'><strong>Make a Reservation</strong></NavLink>
        {!!currentGuest ? <h4 id='loggedin'>Logged in as: {currentGuest.attributes.name}<Logout/> </h4>: null}
      <FaBars className='menu'/>
      </span>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentGuest: state.currentGuest
  }
}
export default connect(mapStateToProps)(Navbar)