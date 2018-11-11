import { Component, OnInit } from '@angular/core';
import { AreaGeograficaService } from '../../services/identificador/area-geografica.service';
import { AreaGeografica } from '../../models/identificadoresCliente/area-geografica-model';
import { FormsModule } from '@angular/forms';
import { TipoIdentificador } from '../../models/identificadoresCliente/tipo-identificador.model';
import { TipoIdentificadorService } from '../../services/identificador/tipo-identificador.service';
import { Estado } from '../../models/identificadoresCliente/estado.model';
import { NumeroEstadosService } from '../../services/identificador/numero-estados.service';
import { Identificador } from '../../models/identificadoresCliente/identificador.model';
import { CarteiraTrabalho } from '../../models/identificadoresCliente/carteira-trabalho.model';
import { CertNascCasDiv } from '../../models/identificadoresCliente/certidao-nasc-cas-div.model';
import { TituloEleitoral } from '../../models/identificadoresCliente/titulo-eleitoral.model';

@Component({
  selector: 'app-identificador-individuo',
  templateUrl: './identificador-individuo.component.html',
  styleUrls: ['./identificador-individuo.component.css']
})
export class IdentificadorIndividuoComponent implements OnInit {

  private areasGeograficas: AreaGeografica[];
  private tiposIdentificadores: TipoIdentificador[];
  private estados: Estado[];

  constructor(
    private areaGeoService: AreaGeograficaService,
    private tipoIdentificadorService: TipoIdentificadorService,
    private estadoService: NumeroEstadosService
  ) { }

  ngOnInit() {
    this.areasGeograficas = this.areaGeoService.getAreasGeograficas();
    this.tiposIdentificadores = this.tipoIdentificadorService.getTiposIdentificadores();
    this.estados = this.estadoService.getEstados();
  }

  submit(f){
    if(f.valid){
      this.fillIdentificador(f);
    }
  }

  fillIdentificador(f){
    var identificador;
    if(f.value.tipoIdentificador == 1){

      identificador = new CarteiraTrabalho();

      identificador.p_serie = f.value.serie;
      identificador.p_codigoEstado = f.value.estado;

    }else if(f.value.tipoIdentificador == 2){
      identificador = new CertNascCasDiv();

      identificador.p_nomeCartorio = f.value.nomeCartorio;
      identificador.p_livro = f.value.numLivro;
      identificador.p_folha = f.value.numFolha;
      identificador.p_termo = f.value.termo;

    }else if(f.value.tipoIdentificador == 3){
      identificador = new TituloEleitoral();

      identificador.p_secaoEleitoral = f.value.secaoEleitoral;
      identificador.p_zonaEleitoral = f.value.zonaEleitoral;
    }else{
      identificador = new Identificador();
    }
    console.log(f.value);
    identificador.p_descricao = f.value.descricao;
    identificador.p_codigo = f.value.codigoGeo.codigoGeo;
    identificador.p_dataEmissao = f.value.date;

    console.log(identificador);
  }




}
