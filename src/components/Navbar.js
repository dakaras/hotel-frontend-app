import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'

const Navbar = ({currentGuest}) => {
    return (
       <div className='navbar'>
         <NavLink exact activeClassName='current' to='/reservations'>Reservations  |</NavLink>
         <NavLink exact activeClassName='current' to='/reservations/new'>Make a Reservation</NavLink>
         {!!currentGuest ? <Logout/> : null}
       </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentGuest: state.currentGuest
  }
}
export default connect(mapStateToProps)(Navbar)