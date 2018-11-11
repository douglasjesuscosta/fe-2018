import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Vinculo } from '../../models/vinculoIndividuo/vinculo.model';
import { Relacionamento } from '../../models/vinculoIndividuo/relacionamentosIndividuo.model';

import { RelacionamentosService } from '../../services/vinculo/relacionamentos.service.service';

@Component({
  selector: 'app-vinculo-individuo',
  templateUrl: './vinculo-individuo.component.html',
  styleUrls: ['./vinculo-individuo.component.css']
})
export class VinculoIndividuoComponent implements OnInit {

  relacionamentos: Relacionamento[];

  pacienteForm: FormGroup;

  constructor(private rService: RelacionamentosService) { }

  ngOnInit() {

    this.relacionamentos = this.rService.getRelacionamentos();
    this.initForm();
  }

  private initForm() {

    let identificadorVinculo = '';
    let relacionamentoVinculo = '';
    let dataInicialVinculo = '';
    let dataFinalVinculo = '';

    this.pacienteForm = new FormGroup({
      'identificador': new FormControl(identificadorVinculo),
      'relacionamento': new FormControl(relacionamentoVinculo),
      'dataInicial': new FormControl(dataInicialVinculo),
      'dataFinal': new FormControl(dataFinalVinculo)
    });
  }

  onSubmit() {

    console.log(this.pacienteForm.value);
  }

}
