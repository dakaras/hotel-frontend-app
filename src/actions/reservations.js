import {resetReservationForm} from './ReservationForm'

// synchronous actions
export const setReservations = (reservations) => {
    return {
        type: 'SET_RESERVATIONS',
        payload: reservations
    }
}

export const clearReservations = () => {
    return {type: 'CLEAR_RESERVATIONS'}
}

export const addReservation = (reservation) => {
    return {
        type: "ADD_RESERVATION",
        reservation
    }
}
//asynchronous actions
export const getReservations = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/reservations', {
                credentials: "include",
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json'
                },
            })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else if (resp.alert) {
                    alert(resp.alert)
                } else {
                    dispatch(setReservations(resp.data))
                }
            })
            .catch(console.log)
    }
}

export const createReservation = (reservationData, history )=> {    
    console.log('C')
    return dispatch => {
        const sendData = {
                start_date: reservationData.startDate,
                end_date: reservationData.endDate,
                name: reservationData.name,
                guest_id: reservationData.currentGuestId,
                room_id: reservationData.roomId,
        }
        return fetch('http://localhost:3001/api/v1/reservations', {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sendData)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else if (resp.alert) {
                alert(resp.alert)
            } else {
                console.log('D')
                dispatch(addReservation(resp.data))
                dispatch(resetReservationForm())
                history.push(`/reservations/${resp.data.id}`)
            }
        })
    }
    console.log('E');
}