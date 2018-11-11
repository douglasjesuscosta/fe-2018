import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DadosDemograficosAdicionais } from '../../models/dadosDemograficos/dados-demograficos-adicionais.model';
import { DataNascimento } from '../../models/dadosDemograficos/data-nascimento.model';
import { DataObito } from '../../models/dadosDemograficos/data-obito.model';

@Component({
  selector: 'app-informacoes-demograficas',
  templateUrl: './informacoes-demograficas.component.html',
  styleUrls: ['./informacoes-demograficas.component.css']
})
export class InformacoesDemograficasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(f){
    var info :DadosDemograficosAdicionais;
    info = new DadosDemograficosAdicionais();

    var dataNasc: DataNascimento;
    dataNasc = new DataNascimento();

    dataNasc.p_dataNascimento = f.value.dataNascimento;
    dataNasc.p_acuraciaDataNascimento = f.value.indAcuraciaDataNascimento;


    var dataObito: DataObito;
    dataObito = new DataObito();

  }

}
