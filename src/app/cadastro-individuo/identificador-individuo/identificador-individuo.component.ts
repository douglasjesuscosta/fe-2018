import { Component, OnInit } from '@angular/core';
import { AreaGeograficaService } from '../../services/identificador/area-geografica.service';
import { AreaGeografica } from '../../models/identificadoresCliente/area-geografica-model';
import { FormsModule } from '@angular/forms';
import { TipoIdentificador } from '../../models/identificadoresCliente/tipo-identificador.model';
import { TipoIdentificadorService } from '../../services/identificador/tipo-identificador.service';
import { Estado } from '../../models/identificadoresCliente/estado.model';
import { NumeroEstadosService } from '../../services/numero-estados.service';

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

  log(x){
    console.log(x.value);
  }


}
