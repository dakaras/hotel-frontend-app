import React from 'react'
import { updateReservationForm } from '../actions/ReservationForm'
import {connect} from 'react-redux'
import { editReservationForm } from '../actions/ReservationForm'

function EditForm({startDate, endDate, updateReservationForm, currentGuestId, reservation, roomId, editReservationForm }) {
    const handleOnChange = (event) => {
        const {name, value} = event.target
        updateReservationForm(name,value)
    }
    const handleSubmit = event => {
        let id = reservation.id
        event.preventDefault()
        editReservationForm({startDate, endDate, currentGuestId, roomId, id})
    }
    
    return (
        <form onSubmit={handleSubmit}>
            
            <input name='startDate' 
            onChange={handleOnChange} 
            placeholder='Start Date'
            id="date" /><br/>

            <input name='endDate' 
            onChange={handleOnChange} 
            placeholder='End Date' /><br/>
            <input type='submit' value='Book Reservation'/>
        </form>
    )
}

const mapStateToProps = state => {
    const {startDate, endDate} = state.ReservationForm
    const currentGuestId = state.currentGuest ? state.currentGuest.id : ""
    return {
        startDate,
        endDate,
        currentGuestId
    }
}
export default connect(mapStateToProps, {updateReservationForm, editReservationForm} )(EditForm)