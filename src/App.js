import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentGuest } from './actions/currentGuest'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Reservations from './components/Reservations'
import Signup from './components/Signup'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import Rooms from './components/Rooms'
import ShowRoom from './components/ShowRoom'
import ReservationCard from './components/ReservationCard'
import Error from './components/Error'
import { getRooms } from './actions/rooms'
import  EditForm  from './components/EditForm'
import { editReservationForm } from './actions/ReservationForm'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentGuest()
    this.props.getRooms()
  }

  render() {
    return (
      <Router>
      <div className='app'>
        {!!this.props.currentGuest? <NavBar location={this.props.location}/> : <Home/>}<br/>
          <Switch>
            <Route exact path='/' component={Reservations}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path ='/reservations' component={Reservations}/>
            <Route exact path ='/reservations/:id' render={props => {
              const reservation = this.props.reservations.find(reservation => reservation.id === props.match.params.id)
              return <ReservationCard reservation={reservation} {...props}/>
              }
            }/>
             <Route exact path ='/reservations/:id/edit' render={props => {
              const reservation = this.props.reservations.find(reservation => reservation.id === props.match.params.id)
              reservation && editReservationForm(reservation)
              return <EditForm reservation={reservation} {...props} roomId={reservation && reservation.attributes.room_id}/>
              }
            }/>
            <Route exact path ='/reservations/new' component={ReservationForm}/>
            <Route exact path ='/rooms' component={Rooms}/>
            <Route exact path ='/rooms/:id' component={ShowRoom}/>
            <Route component={Error}/>
          </Switch>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentGuest: state.currentGuest,
    reservations: state.reservations
  }
}
export default connect(mapStateToProps, {getCurrentGuest, getRooms, editReservationForm})(App);