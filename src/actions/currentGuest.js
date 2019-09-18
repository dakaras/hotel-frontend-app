//synchronous action creator
export const setCurrentGuest = (guest) => {
    return {
        type: 'SET_CURRENT_GUEST',
        payload: guest
    }
}

//async action creator
export const login = credentials => {
    return dispatch => {
        return fetch('https://localhost:3001/api/v1/login', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(username: 'MaryB', 'password')
        })
    }
}