import { configureStore } from '@reduxjs/toolkit';
import noteReducer from './Notes/NoteSlice';

export const store = configureStore({
    reducer: {
        notes: noteReducer,
    }
})