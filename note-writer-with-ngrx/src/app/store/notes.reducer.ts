import { createReducer, on } from "@ngrx/store";
import { save } from "./notes.actions";


const initialState = {
    note: {
        title: '',
        content: ''
    }
}

export const notesReducer = createReducer(
    initialState,
    on(save, (state, action) => state)
);