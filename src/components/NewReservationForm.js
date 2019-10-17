import React from 'react'
import { updateLoginForm } from '../actions/loginForm'
import { updateReservationForm } from '../actions/newReservationForm'
import{connect} from 'react-redux'

function NewReservationForm({name, startDate, endDate, history}) {
    const handleOnChange = (event) => {
        const {name, value} = event.target
        updateReservationForm(name,value)
    }
    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name='name' 
            onChange={handleOnChange} 
            placeholder='Room'
            value={name}/><br/>

            <input name='startDate' 
            onChange={handleOnChange} 
            placeholder='Start Date'
            name={startDate} 
            id="date" /><br/>

            <input name='endDate' 
            onChange={handleOnChange} 
            placeholder='End Date' 
            name={endDate} /><br/>
            <input type='submit' value='Make Reservation'/>
        </form>
    )
}

const mapStateToProps = state => {
    const {startDate, endDate, name} = state.newReservationForm
    return {
        startDate,
        endDate,
        name
    }
}
export default connect(mapStateToProps, {updateReservationForm} )(NewReservationForm)
//   function getDate() {
//       var today = new Date();
//       var dd = today.getDate();
//       var mm = today.getMonth() + 1; //January is 0!
//       var yyyy = today.getFullYear();

//       if (dd < 10) {
//           dd = '0' + dd
//       }

//       if (mm < 10) {
//           mm = '0' + mm
//       }

//       today = yyyy + '/' + mm + '/' + dd;
//       console.log(today);
//       document.getElementById("date").value = today;
//   }


//   window.onload = function () {
//       getDate();
//   };