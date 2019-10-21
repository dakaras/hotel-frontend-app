
export default (state = [], action) => {

    switch (action.type) {
        case 'SET_RESERVATIONS':
            return action.payload
        case 'CLEAR_RESERVATIONS':
            return []
        case 'ADD_RESERVATION':
            return state.reservations.concat(action.reservations)
        default:
            return state
    }
}