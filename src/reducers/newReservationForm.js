const initialState = {
    start_date: "",
    end_date: "",
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_NEW_RESERVATION_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_RESERVATION_FORM":
            return initialState
        default:
            return state
    }
}