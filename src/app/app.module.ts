import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2AutoCompleteModule

  ],
  providers: [AppComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
