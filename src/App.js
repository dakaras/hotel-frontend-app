import React from 'react';
import './App.css';
import Login from './components/Login.js'
import {connect} from 'react-redux'
import {getCurrentGuest} from './actions/currentGuest'
 
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentGuest()
  }

  render() {
    return (
      <Login/>
    );
  }
}

export default connect(null, {getCurrentGuest})(App);