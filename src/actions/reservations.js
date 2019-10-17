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