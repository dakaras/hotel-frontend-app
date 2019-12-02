
export default (state = [], action) => {
    switch (action.type) {
        case 'SET_RESERVATIONS':
            return action.payload
        case 'CLEAR_RESERVATIONS':
            return []
        case 'ADD_RESERVATION':
            return state.concat(action.reservation)
        case 'EDIT_RESERVATION':
            return state.map(reservation => reservation.id === action.reservation.id ? action.reservation : reservation)
        case "DELETE_RESERVATION":
            const reservations = state.reservations.filter(reservation => reservation.id !== action.reservation.id)
            return reservations
        default:
            return state    
    }
}