
export default (state = [], action) => {

    switch (action.type) {
        case 'SET_RESERVATIONS':
            return action.payload
        case 'CLEAR_RESERVATIONS':
            return []
        default:
            return state
    }
}