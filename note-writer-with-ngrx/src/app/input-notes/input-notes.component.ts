import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { save } from '../store/notes.actions';


@Component({
  selector: 'app-input-notes',
  templateUrl: './input-notes.component.html',
  styleUrls: ['./input-notes.component.css']
})
export class InputNotesComponent {

  constructor(private store: Store) {}

  addNote(titleInput: HTMLInputElement, contentInput: HTMLInputElement)
  {
    let x;
    let y;

    if(titleInput && contentInput != null) {
      x = titleInput.textContent;
      y = contentInput.textContent;
    }
    else{
      x = "";
      y = ""
    }
    

    const note = {
      title : x,
      content : y
    };

    // this.store.dispatch(save(note));
  }


}
