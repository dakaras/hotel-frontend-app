import React from 'react'
import {connect} from 'react-redux'

const Navbar = ({currentGuest}) => {
    return (
       <div className='navbar'>
        {currentGuest ? `Welcome, ${currentGuest.attributes.name}!` : ""}
       </div>
    )
}

const mapStateToProps = (state) => {
  return {
    currentGuest: state.currentGuest
  }
}
export default connect(mapStateToProps)(Navbar)