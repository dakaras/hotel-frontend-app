//synchronous action creator
export const setCurrentGuest = (guest) => {
    return {
        type: 'SET_CURRENT_GUEST',
        payload: guest
    }
}

export const clearCurrentGuest = () => {
    return {
        type: 'CLEAR_CURRENT_GUEST'
    }
}


//async action creator
export const login = credentials => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/login', {
            credentials: "include",
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            }
            else {
                // dispatch({type: "SET_CURRENT_GUEST", guest: guest})
                dispatch(setCurrentGuest(resp))
            }
        })
        .catch(console.log)
    }
}

export const getCurrentGuest = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/get_current_guest', {
            credentials: "include",
            method: 'GET',
            headers: {
                "Content-Type": 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error){
                alert(resp.error)
            }
            else {
                dispatch(setCurrentGuest(resp.data))
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(clearCurrentGuest())
        return fetch('http://localhost:3001/api/v1/logout', {
            credentials: 'include',
            method: 'DELETE',
        })
    }
}