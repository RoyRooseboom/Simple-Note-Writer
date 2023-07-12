import { createAction, props } from "@ngrx/store";


export const save = createAction(
    '[Input Note] Save',
    props<{
        title: string,
        content: string
    }>()
);