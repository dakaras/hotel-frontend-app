export default (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_GUEST':
            return action.guest
        case 'CLEAR_CURRENT_GUEST':
            return null
        default: {
            return state
        }
    }
}