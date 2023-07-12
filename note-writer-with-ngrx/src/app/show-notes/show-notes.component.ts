import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent {
  
  note$: Observable<{title: string, content: string }> = new Observable<{title:"", content: ""}>;

  constructor(private store: Store<{ note: { title: string, content: string } }>) {
    this.note$ = store.select('note');
  }
}
