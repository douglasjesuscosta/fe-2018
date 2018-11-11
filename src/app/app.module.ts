import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentificadorIndividuoComponent } from './cadastro-individuo/identificador-individuo/identificador-individuo.component';
import { ComunicacaoIndividuoComponent } from './cadastro-individuo/comunicacao-individuo/comunicacao-individuo.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { AreaGeograficaService } from './services/identificador/area-geografica.service';
import { FormsModule } from '@angular/forms';
import { MeioComunicaoService } from './services/comunicaoIndividuo/meioComunicacao.service';
import { PreferenciaContato } from './models/comunicaoIndividuo/preferenciaContato.model';
import { PreferenciaContatoService } from './services/comunicaoIndividuo/preferenciaContato.service';
import { UtilizacaoContatoService } from './services/comunicaoIndividuo/utilizacaContato.service';
import { RouterModule } from '@angular/router';
import { InformacoesDemograficasComponent } from './cadastro-individuo/informacoes-demograficas/informacoes-demograficas.component';
import { NomeIndividuoComponent } from './nome-individuo/nome-individuo.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentificadorIndividuoComponent,
    ComunicacaoIndividuoComponent,
    HeaderComponent,
    BemvindoComponent,
    InformacoesDemograficasComponent,
    NomeIndividuoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'identificador', component: IdentificadorIndividuoComponent},
      {path:'informacoesDemograficas', component: InformacoesDemograficasComponent}
    ])
  ],
  providers: [
    AreaGeograficaService,
    MeioComunicaoService,
    PreferenciaContatoService,
    UtilizacaoContatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
