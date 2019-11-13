import React from 'react'
import {Link} from 'react-router-dom'

const ReservationCard = ({reservation}) => {
    return (
        reservation ?
        <div>
            <h2>Reservation #{reservation.id}</h2>
            <h3>Start Date:</h3>
            <p>{reservation.attributes.start_date}</p>
            <h3>End Date:</h3>
            <p>{reservation.attributes.end_date}</p>
            <h3> Guest Ratings: </h3>
            <div>{reservation.attributes.rating}</div>
            <Link to={`/reservations/${reservation.id}/edit`}>Edit Reservation</Link>
        </div>
        : null 
    )
}
export default ReservationCard