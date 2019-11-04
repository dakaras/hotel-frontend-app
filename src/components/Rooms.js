import React from 'react'
import {connect} from 'react-redux'
import ShowRoom from './ShowRoom'
import NewReservationForm from './NewReservationForm'

const Rooms = (props) => {
    const roomCards = props.rooms.map((room, index)=> 
        <>
        <ShowRoom room={room} key={room.id}/>
        <NewReservationForm key={index} roomId={room.id}/>
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
