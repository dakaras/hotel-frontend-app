import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import {getCurrentGuest} from './actions/currentGuest'
import NavBar from './components/Navbar'
import MainContainer from './components/MainContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentGuest()
  }

  render() {
    return (
      <div className='app'>
        <NavBar/>
        <MainContainer/>
      </div>
      
    );
  }
}

const mapStateToProps = ({currentGuest}) => {
  return {
    currentGuest
  }
}
export default connect(mapStateToProps, {getCurrentGuest})(App);