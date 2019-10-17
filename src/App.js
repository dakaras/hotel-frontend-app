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
import Logout from './components/Logout'
import newReservationForm from './components/NewReservationForm'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentGuest()
  }

  render() {
    return (
      <Router>
      <div className='app'>
        <NavBar/>
        <Logout/>
          <Switch>
            <Route exact path='/' render={ () => this.props.currentGuest? <Reservations/> : <Home/>}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path ='/reservations' component={Reservations}/>
            <Route exact path ='/reservations/new' component={newReservationForm}/>
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
export default connect(mapStateToProps, {getCurrentGuest})(App);