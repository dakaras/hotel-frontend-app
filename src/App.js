import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentGuest} from './actions/currentGuest'
import NavBar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Reservations from './components/Reservations'
import Signup from './components/Signup'
import Home from './components/Home'
import newReservationForm from './components/NewReservationForm'
import Rooms from './components/Rooms'
import ShowRoom from './components/ShowRoom'
import Error from './components/Error'
import {getRooms} from './actions/rooms'

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
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path ='/reservations' component={Reservations}/>
            <Route exact path ='/reservations/new' component={newReservationForm}/>
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
    currentGuest: state.currentGuest
  }
}
export default connect(mapStateToProps, {getCurrentGuest, getRooms})(App);