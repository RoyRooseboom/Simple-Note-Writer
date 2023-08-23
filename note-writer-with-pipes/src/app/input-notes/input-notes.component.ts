import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-notes',
  templateUrl: './input-notes.component.html',
  styleUrls: ['./input-notes.component.css']
})
export class InputNotesComponent {

  @Output() note = new EventEmitter<{title:string, content:string}>();

  addNote(titleInput: HTMLInputElement, contentInput:HTMLInputElement)
  {
    this.note.emit({title: titleInput.value, content: contentInput.value});
  }

  // Step 3: AddNote gets the value's of the HTMLInputElement we send to it, through the template reference variable.
  // Step 4: Emit this data through a EventEmitter
}
