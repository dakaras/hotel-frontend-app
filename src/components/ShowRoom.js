import React from 'react'

const ShowRoom = ({room}) => {
    return (
        <div>
            <h2>Room: {room.id}</h2>
            <h3>Name:</h3>
            <p>{room.attributes.name}</p>
            <h3>Price:</h3>
            <p>{room.attributes.price}</p>
        </div>
    )
}
export default ShowRoom