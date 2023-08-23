import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent {
  
  @Input() receivedNote: {title: string, content: string} = {title: "", content: ""};

  // Step 8: We receive the data. Via Input from app.component.html's data binding receivedNote]="note"
}
