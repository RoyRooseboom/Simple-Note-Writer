import { Action } from '@ngrx/store'


const initialState = {
    note: {
        title: '',
        content: ''
    }
}

export function notesReducer(state = initialState, action: Action) {

}