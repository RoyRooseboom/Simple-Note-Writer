import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { InputNotesComponent } from './input-notes/input-notes.component';
import { StoreModule } from '@ngrx/store';
import { notesReducer } from './store/notes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ShowNotesComponent,
    InputNotesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      note: notesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
