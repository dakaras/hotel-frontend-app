import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const Reservations = (props) => {
    const resCards = props.reservations.map(r => 
            <p key={r.id}><Link to={`/reservations/${r.id}`}>
                Start Date: {r.attributes.start_date} - 
                End Date: {r.attributes.end_date}</Link></p>
        ) 
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