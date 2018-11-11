import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { CadastroIndividuoComponent } from './cadastro-individuo/cadastro-individuo.component';
import { IdentificadorIndividuoComponent } from './cadastro-individuo/identificador-individuo/identificador-individuo.component';
import { ComunicacaoIndividuoComponent } from './cadastro-individuo/comunicacao-individuo/comunicacao-individuo.component';
import { VinculoIndividuoComponent } from './cadastro-individuo/vinculo-individuo/vinculo-individuo.component';
import { InformacoesDemograficasComponent } from './cadastro-individuo/informacoes-demograficas/informacoes-demograficas.component';
import { NomeIndividuoComponent } from 'src/app/cadastro-individuo/nome-individuo/nome-individuo.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bemvindo', pathMatch: 'full' },
  { path: 'bemvindo', component: BemvindoComponent },
  { path: 'cadastrarPaciente', component: CadastroIndividuoComponent, children: [
    {path: '', redirectTo: 'identificador', pathMatch: 'full' },
    {path: 'identificador', component: IdentificadorIndividuoComponent},
    {path: 'informacoesDemograficas', component: InformacoesDemograficasComponent},
    {path: 'nomeIndividuo', component: NomeIndividuoComponent},
    {path: 'comunicacaoindivido', component: ComunicacaoIndividuoComponent },
    {path: 'relacionamento', component: VinculoIndividuoComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}