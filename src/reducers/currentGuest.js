export default (state = null, action) => {
    switch (action.type) {
        case 'SET_CURRENT_GUEST':
            return action.guest
        default: {
            return state
        }
    }
}