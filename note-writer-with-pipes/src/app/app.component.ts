import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'note-writer';


  notes: {title:string ,content:string}[] = []

  saveNote(noteContents: {title: string, content: string})
  {
    this.notes.push(noteContents)
  }
}

// Step 6: saveNote Function receives the event data, and pushes it to the notes array.