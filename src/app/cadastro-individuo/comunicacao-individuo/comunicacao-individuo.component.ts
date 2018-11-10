import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { MeioComunicacao } from '../../models/comunicaoIndividuo/meioComunicacao.model';
import { PreferenciaContato } from '../../models/comunicaoIndividuo/preferenciaContato.model';
import { UtilizacaoContato } from '../../models/comunicaoIndividuo/utilizacaoContato.model';

import { MeioComunicaoService } from '../../services/comunicaoIndividuo/meioComunicacao.service';
import { PreferenciaContatoService } from '../../services/comunicaoIndividuo/preferenciaContato.service';
import { UtilizacaoContatoService } from '../../services/comunicaoIndividuo/utilizacaContato.service';

@Component({
  selector: 'app-comunicacao-individuo',
  templateUrl: './comunicacao-individuo.component.html',
  styleUrls: ['./comunicacao-individuo.component.css']
})
export class ComunicacaoIndividuoComponent implements OnInit {

  meiosComunicacao: MeioComunicacao[];
  preferenciasContato: PreferenciaContato[];
  utilizacoesContato: UtilizacaoContato[];

  constructor(private mCService: MeioComunicaoService, private pCService: PreferenciaContatoService, private uCSerivce: UtilizacaoContatoService) { }

  ngOnInit() {
    this.meiosComunicacao = this.mCService.getIngredients();
    this.preferenciasContato = this.pCService.getPreferenciasContato();
    this.utilizacoesContato = this.uCSerivce.getUtilizacoesContato();
  }

}
