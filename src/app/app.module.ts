import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentificadorIndividuoComponent } from './identificador-individuo/identificador-individuo.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificadorIndividuoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
