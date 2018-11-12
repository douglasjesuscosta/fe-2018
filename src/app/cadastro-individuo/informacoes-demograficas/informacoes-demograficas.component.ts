import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit(f){
    var info :DadosDemograficosAdicionais;
    info = new DadosDemograficosAdicionais();

    var dataNasc: DataNascimento;
    dataNasc = new DataNascimento();

    dataNasc.p_dataNascimento = f.value.dataNascimento;
    dataNasc.p_acuraciaDataNascimento = f.value.indAcuraciaDataNascimento;
    dataNasc.p_seguimentoDataNascimento = f.value.indSegDataNascimento;
    info.p_dataNascimento = dataNasc;

    var dataObito: DataObito;
    dataObito = new DataObito();
    dataObito.p_dataObito = f.value.dataObito;
    dataObito.p_acuraciaDataObito = f.value.indAcuraciaDataObito;
    dataObito.p_fonteNotificacaoObito = f.value.fonteObito;
    info.p_dataObito = dataObito;

    info.p_nomeMae = f.value.nomeMae;
    info.p_sexo = f.value.sexo;
    info.p_nomePai = f.value.nomePai;
    info.p_pluralidadeNascimento = f.value.plurNascimento;
    info.p_racaCor = f.value.raca;
    info.p_situacaoFamilitar = f.value.situacao;
    info.p_comentarioIdentificacao = f.value.comentario;
    info.p_estNascimento = f.value.estNascimento;
    info.p_munNascimento = f.value.munNascimento;
    info.p_paisNascimento = f.value.paisNascimento;

    console.log(info);
    this.router.navigate(['../comunicacaoindivido'], {relativeTo: this.route});
  }

}
