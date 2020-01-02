import React from 'react'
import {Link} from 'react-router-dom'

class ReservationCard extends React.Component {
    state = {
        rating: 0,
        comments: [],
        value: ""
    }
    handleClick = (event) => {
        this.setState({
            rating: this.state.rating + 1
        })

        this.state.rating += 1
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            comments: [...this.state.comments, this.state.value],
            value: ""
        })
    }

    render() {
        let reservation = this.props.reservation
        return (
            reservation ? 
            <div>
                <h2>Reservation #{reservation.id}</h2>
                <h3>Start Date:</h3>
                <p>{reservation.attributes.start_date}</p>
                <h3>End Date:</h3>
                <p>{reservation.attributes.end_date}</p>
                <h3> Guest Rating: </h3>
                <div className='star-rating'>{reservation.attributes.rating}</div>
                <button onClick={this.handleClick}>{this.state.rating}</button><br></br><br></br>

                <form onSubmit={this.handleSubmit}>
                    <label> Add a comment!
                    <textarea value={this.state.value} onChange={this.handleChange}/>
                    </label><br/><br/>
                    <button type='submit' value='Submit'>Submit</button>
                </form><br></br>
                {this.state.comments}<br></br>
                <br></br>
                
                <Link to={`/reservations/${reservation.id}/edit`}>Edit Reservation</Link><br></br>
            </div>
            : null 
        )
    }
}
export default ReservationCard