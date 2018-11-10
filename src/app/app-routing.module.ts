import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BemvindoComponent } from './bemvindo/bemvindo.component';
import { ComunicacaoIndividuoComponent } from './comunicacao-individuo/comunicacao-individuo.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bemvindo', pathMatch: 'full' },
  { path: 'bemvindo', component: BemvindoComponent },
  { path: 'comunicaoindivido', component: ComunicacaoIndividuoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}