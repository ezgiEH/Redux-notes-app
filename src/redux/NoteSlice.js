import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addNotesAsync = createAsyncThunk(
    "notes/addNotesAsync",
    async (note) => {
        const response = await axios.post(
            "http://localhost:3001/notes",
            note
        );
        return response.data;
    }
);

export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: 1,
                title: 'Note 1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nunc. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nunc.',
                color: 'red.400'
            },
            {
                id: 2,
                title: 'Note 2',
                content: 'Lorem ipsum dolor sit amet,',
                color: 'green.400'
            },
            {
                id: 3,
                title: 'Note 3',
                content: 'Content 3',
                color: 'blue.400'
            },
            {
                id: 4,
                title: 'Note 4',
                content: 'Content 4',
                color: 'yellow.400'
            },
            {
                id: 5,
                title: 'Note 5',
                content: 'Content 5',
                color: 'pink.400'
            },
            {
                id: 6,
                title: 'Note 6',
                content: 'Content 6',
                color: 'purple.400'
            },
        ],
    },
    reducers: {},
    extraReducers: {
        [addNotesAsync.fulfilled]: (state, action) => {
            state.items.push(action.payload);
        },
    },
})

export default noteSlice.reducer