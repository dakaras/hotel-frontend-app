//sync actions

export const updateReservationForm = (name, value) => {
    return {
        type: 'UPDATE_RESERVATION_FORM',
        formData: {name, value}
    }
}