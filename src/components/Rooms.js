import React from 'react'
import {connect} from 'react-redux'
import ShowRoom from './ShowRoom'

const Rooms = (props) => {
    const roomCards = props.rooms.map(room => 
        <ShowRoom 
            room = {room}
            key ={room.id}
        />)
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
