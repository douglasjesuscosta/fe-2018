import { Injectable } from '@angular/core';
import { IndicadorUso } from '../../models/nome/indicador-uso.model';

@Injectable({
  providedIn: 'root'
})
export class IndicadorUsoService {

  private indUsos: IndicadorUso[] = [
    new IndicadorUso(1, "Informação não confiável"),
    new IndicadorUso(2, "Código com erro de digitação"),
    new IndicadorUso(3, "Nome não é para ser usado"),
    new IndicadorUso(4, "Vínculo do nome proibido por lei"),
    new IndicadorUso(6, "Requisito especial de privacidade/segurança"),
    new IndicadorUso(9, "Nome temporário"),
  ]

  constructor() { }

  getIndicUso(){
    return this.indUsos;
  }
}
