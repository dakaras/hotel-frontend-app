import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
// import guestsReducer from './reducers/guests'
import loginForm from './reducers/loginForm'
import currentGuest from './reducers/currentGuest'
import reservations from './reducers/reservations'
import signupForm from './reducers/signupForm'
import ReservationForm from './reducers/ReservationForm'
import rooms from './reducers/rooms'

const reducer = combineReducers({
    // guests: guestsReducer,
    currentGuest: currentGuest,
    loginForm,
    reservations,
    signupForm,
    ReservationForm,
    rooms
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(<Provider store= {store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
