
//sync actions

export const updateReservationForm = (name, value) => {
    return {
        type: 'UPDATE_RESERVATION_FORM',
        formData: {name, value}
    }
}

export const resetReservationForm = () => {
    return {
        type: 'RESET_RESERVATION_FORM'
    }
}

export const editForm = reservation => {
    return {
        type: "EDIT_RESERVATION",
        reservation
    }
}

export const editReservationForm = reservation => {
    const reservationFormData = {
        reservation: {
            start_date: reservation.startDate,
            end_date: reservation.endDate
        }
    }
    return dispatch => {
        
        return fetch(`http://localhost:3001/api/v1/reservations/${reservation.id}`, {
            method: "PATCH",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationFormData)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else if (resp.alert) {
                alert(resp.alert)
            } else {
                dispatch(editForm(resp.data))
                dispatch(resetReservationForm())
                // history.push(`/reservations/${resp.data.id}`)
            }
        })
    }
}