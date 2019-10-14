import React from 'react'
import {connect} from 'react-redux'
// import reservations from '../reducers/reservations'
import ReservationCard from './ReservationCard'

const Reservations = (props) => {
    const resCards = props.reservations.map(r => 
    <ReservationCard 
        reservation={r} 
        key={r.id}/>)
    console.log("rescards", resCards)
    return (
            resCards.length > 0 ? resCards : null 
    )
}

const mapStateToProps = state => {
    return {
        reservations: state.reservations
    }
}
export default connect(mapStateToProps)(Reservations)