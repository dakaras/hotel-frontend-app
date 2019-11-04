import React from 'react'
import { updateReservationForm } from '../actions/newReservationForm'
import {connect} from 'react-redux'
import {createReservation} from '../actions/reservations'

function NewReservationForm({startDate, endDate, updateReservationForm, createReservation, currentGuestId, roomId}) {
    const handleOnChange = (event) => {
        const {name, value} = event.target
        updateReservationForm(name,value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        createReservation({startDate, endDate, currentGuestId,roomId })
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
    const {startDate, endDate, roomId} = state.newReservationForm
    const currentGuestId = state.currentGuest ? state.currentGuest.id : ""
    return {
        startDate,
        endDate,
        currentGuestId
    }
}
export default connect(mapStateToProps, {updateReservationForm, createReservation} )(NewReservationForm)