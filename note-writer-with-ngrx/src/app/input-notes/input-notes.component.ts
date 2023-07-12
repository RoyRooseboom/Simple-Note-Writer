import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { save } from '../store/notes.actions';


@Component({
  selector: 'app-input-notes',
  templateUrl: './input-notes.component.html',
  styleUrls: ['./input-notes.component.css']
})
export class InputNotesComponent {
  titel = "";
  content = "";

  constructor(private store: Store) {}

  addNote(titleInput: HTMLInputElement, contentInput: HTMLInputElement)
  {
    let x;
    let y;

    // if(titleInput && contentInput != null) {
    //   x = titleInput.textContent;
    //   y = contentInput.textContent;
    // }
    // else{
    //   x = "";
    //   y = ""
    // }
    

    const note = {
      title : this.titel,
      content : this.content
    };

    this.store.dispatch(save(note));
  }


}
