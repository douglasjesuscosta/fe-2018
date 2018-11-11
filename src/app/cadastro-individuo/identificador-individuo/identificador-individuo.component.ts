import { Component, OnInit } from '@angular/core';
import { AreaGeograficaService } from '../../services/identificador/area-geografica.service';
import { AreaGeografica } from '../../models/identificadoresCliente/area-geografica-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identificador-individuo',
  templateUrl: './identificador-individuo.component.html',
  styleUrls: ['./identificador-individuo.component.css']
})
export class IdentificadorIndividuoComponent implements OnInit {

  private areasGeograficas: AreaGeografica[];

  constructor(
    private areaGeoService: AreaGeograficaService
  ) { }

  ngOnInit() {
    this.areasGeograficas = this.areaGeoService.getAreasGeograficas();
    console.log(this.areasGeograficas);
  }

}
