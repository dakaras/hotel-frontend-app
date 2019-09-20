import React from 'react';
import './App.css';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import {connect} from 'react-redux'
import {getCurrentGuest} from './actions/currentGuest'
 
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentGuest()
  }

  render() {
    return (
     this.props.currentGuest ? <Logout/> : <Login/>
    );
  }
}

const mapStateToProps = ({currentGuest}) => {
  return {
    currentGuest
  }
}
export default connect(mapStateToProps, {getCurrentGuest})(App);