import React from 'react'
import {connect} from 'react-redux'
import ShowRoom from './ShowRoom'
import ReservationForm from './ReservationForm'

const Rooms = (props) => {
    const roomCards = props.rooms.map((room, index)=> 
        <>
        <ShowRoom room={room} key={room.id}/>
        <ReservationForm key={index} history={props.history} roomId={room.id}/>
        </>
        )
    return (
       roomCards
    )
}
const mapStateToProps = state => {
    return {
        rooms: state.rooms
    }
}
export default connect(mapStateToProps)(Rooms)
