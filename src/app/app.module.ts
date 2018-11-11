import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IdentificadorIndividuoComponent } from './cadastro-individuo/identificador-individuo/identificador-individuo.component';
import { ComunicacaoIndividuoComponent } from './cadastro-individuo/comunicacao-individuo/comunicacao-individuo.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { AreaGeograficaService } from './services/identificador/area-geografica.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeioComunicaoService } from './services/comunicaoIndividuo/meioComunicacao.service';
import { PreferenciaContatoService } from './services/comunicaoIndividuo/preferenciaContato.service';
import { UtilizacaoContatoService } from './services/comunicaoIndividuo/utilizacaContato.service';
import { RouterModule } from '@angular/router';
import { InformacoesDemograficasComponent } from './cadastro-individuo/informacoes-demograficas/informacoes-demograficas.component';
import { NomeIndividuoComponent } from 'src/app/cadastro-individuo/nome-individuo/nome-individuo.component';
import { VinculoIndividuoComponent } from './cadastro-individuo/vinculo-individuo/vinculo-individuo.component';
import { CadastroIndividuoComponent } from './cadastro-individuo/cadastro-individuo.component';


@NgModule({
  declarations: [
    AppComponent,
    IdentificadorIndividuoComponent,
    ComunicacaoIndividuoComponent,
    HeaderComponent,
    BemvindoComponent,
    InformacoesDemograficasComponent,
    NomeIndividuoComponent,
    VinculoIndividuoComponent,
    CadastroIndividuoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
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
