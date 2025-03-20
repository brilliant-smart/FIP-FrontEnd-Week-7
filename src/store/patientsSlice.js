import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    patients: [],
};

const patientsSlice = createSlice({
    name: 'patients',
    initialState,
    reducers: {
        addPatient: (state, action) => {
            state.patients.push(action.payload);
        },
        removePatient: (state, action) => {
            state.patients = state.patients.filter(patient => patient.id !== action.payload);
        },
        updatePatient: (state, action) => {
            const index = state.patients.findIndex(patient => patient.id === action.payload.id);
            if (index !== -1) {
                state.patients[index] = action.payload;
            }
        },
    },
});

export const { addPatient, removePatient, updatePatient } = patientsSlice.actions;
export default patientsSlice.reducer;
