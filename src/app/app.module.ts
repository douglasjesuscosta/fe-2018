import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentificadorIndividuoComponent } from './cadastro-individuo/identificador-individuo/identificador-individuo.component';
import { ComunicacaoIndividuoComponent } from './cadastro-individuo/comunicacao-individuo/comunicacao-individuo.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BemvindoComponent } from './bemvindo/bemvindo.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificadorIndividuoComponent,
    ComunicacaoIndividuoComponent,
    HeaderComponent,
    BemvindoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
