import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ToDoComponent } from './to-do/to-do.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent , ToDoComponent
  ],
  imports: [
    BrowserModule, FormsModule ,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
