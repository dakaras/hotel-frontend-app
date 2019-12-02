import React from 'react'
import { updateReservationForm } from '../actions/ReservationForm'
import {connect} from 'react-redux'
import {createReservation} from '../actions/reservations'

function ReservationForm({history, startDate, endDate, updateReservationForm, createReservation, currentGuestId, roomId}) {
    const handleOnChange = (event) => {
        const {name, value} = event.target
        updateReservationForm(name,value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        console.log('A')
        createReservation({startDate, endDate, currentGuestId, roomId }, history)
        console.log('B')
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
export default connect(mapStateToProps, {updateReservationForm, createReservation} )(ReservationForm)