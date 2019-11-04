export const setRooms = (rooms) => {
    return {
        type: 'GET_ROOMS',
        payload: rooms
    }
}
export const getRooms = () => {
    return dispatch => {
        return fetch('http://localhost:3001/api/v1/rooms', {
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
                    dispatch(setRooms(resp.data))
                }
            })
            .catch(console.log)
    }
}