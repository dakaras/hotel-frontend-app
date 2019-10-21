import React from 'react'

const ReservationCard = ({reservation}) => {
    return (
        <div>
            <h2>Reservation #{reservation.id}</h2>
            <h3>Start Date:</h3>
            <p>{reservation.attributes.start_date}</p>
            <h3>End Date:</h3>
            <p>{reservation.attributes.end_date}</p>
        </div>
    )
}
export default ReservationCard