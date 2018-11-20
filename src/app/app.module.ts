import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { EmplyeesComponent } from './components/emplyees/emplyees.component';
import { AaaComponent } from './aaa/aaa.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplyeesComponent,
    AaaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
