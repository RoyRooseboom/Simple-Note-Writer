import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowNotesComponent } from './show-notes/show-notes.component';
import { InputNotesComponent } from './input-notes/input-notes.component';
import { ShortenPipe } from './shorten.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShowNotesComponent,
    InputNotesComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
