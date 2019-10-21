import React from 'react'
import { updateReservationForm } from '../actions/newReservationForm'
import{connect} from 'react-redux'
import {createReservation} from '../actions/reservations'

function NewReservationForm({name, startDate, endDate, history, updateReservationForm, createReservation, currentGuestId}) {
    const handleOnChange = (event) => {
        const {name, value} = event.target
        updateReservationForm(name,value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        createReservation(name, startDate, endDate, currentGuestId)
    }
    return (
        <form onSubmit={handleSubmit}>
            <select name='room_id' onChange={handleOnChange} >
                <option defaultValue>Rooms - Daily Rates</option>
                <option value="Single">Single Room - $100</option>
                <option value="Double">Double Room - $200</option>
                <option value="Suite">Suite - $300</option>
                <option value="Executive">Executive King - $400</option>
            </select><br/>

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
    const {startDate, endDate, name} = state.newReservationForm
    const currentGuestId = state.currentGuest ? state.currentGuest.id : ""
    return {
        startDate,
        endDate,
        name,
        currentGuestId
    }
}
export default connect(mapStateToProps, {updateReservationForm, createReservation} )(NewReservationForm)