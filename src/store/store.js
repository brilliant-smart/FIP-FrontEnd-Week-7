import { configureStore } from '@reduxjs/toolkit';
import patientsReducer from './patientsSlice';
import appointmentsReducer from './appointmentsSlice';

export const store = configureStore({
    reducer: {
        patients: patientsReducer,
        appointments: appointmentsReducer,
    },
});

export default store;
