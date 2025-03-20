import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    appointments: [],
};

const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState,
    reducers: {
        addAppointment: (state, action) => {
            state.appointments.push(action.payload);
        },
        removeAppointment: (state, action) => {
            state.appointments = state.appointments.filter(appointment => appointment.id !== action.payload);
        },
        updateAppointment: (state, action) => {
            const index = state.appointments.findIndex(app => app.id === action.payload.id);
            if (index !== -1) {
                state.appointments[index] = action.payload;
            }
        },
    },
});

export const { addAppointment, removeAppointment, updateAppointment } = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
