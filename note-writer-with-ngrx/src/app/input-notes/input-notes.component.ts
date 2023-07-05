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


}
