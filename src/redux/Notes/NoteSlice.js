import { createSlice, nanoid } from "@reduxjs/toolkit";
import { writeNotesToLocalStorage, readNotesFromLocalStorage } from "./Services";


export const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            ...readNotesFromLocalStorage()
        ],
        isLoading: false,
        error: null,
    },
    reducers: {
        addNotes: {
            reducer: (state, action) => {
                state.items.push(action.payload)
                writeNotesToLocalStorage(state.items)
                return state
            },
            prepare: ({ title, content, color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        color
                    }
                }
            }
        },
        deleteNotes: (state, action) => {
            state.items = state.items.filter(note => note.id !== action.payload)
            writeNotesToLocalStorage(state.items)
        },
        editNotes: {
            reducer: (state, action) => {
                const note = state.items.find(note => note.id === action.payload.id)
                action.payload.title ? note.title = action.payload.title : note.title = note.title
                action.payload.content ? note.content = action.payload.content : note.content = note.content
                action.payload.color ? note.color = action.payload.color : note.color = note.color
                writeNotesToLocalStorage(state.items)
                return state    
            },
            prepare: ({ id, title, content, color }) => {
                return {
                    payload: {
                        id,
                        title,
                        content,
                        color
                    }
                }
            }
        },
        setSearch: (state, action) => {
            state.searchTerm = action.payload
        }
    } })

export const selectSearch = (state) => state.notes.search
export const { addNotes, deleteNotes, editNotes, setSearch } = noteSlice.actions
export default noteSlice.reducer