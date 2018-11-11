import { Injectable } from '@angular/core';
import { Estado } from '../../models/identificadoresCliente/estado.model';

@Injectable({
  providedIn: 'root'
})
export class NumeroEstadosService {

  private estados: Estado[] = [
    new Estado("AC", "Acre"),
    new Estado("AL", "Alagoas"),
    new Estado("AM", "Amazonas"),
    new Estado("AP", "Amapá"),
    new Estado("BA", "Bahia"),
    new Estado("CE", "Ceará"),
    new Estado("DF", "Distrito Federal"),
    new Estado("ES", "Espirito Santo"),
    new Estado("GO", "Goiás"),
    new Estado("MA", "Maranhão"),
    new Estado("MG", "Minas Gerais"),
    new Estado("MS", "Mato Grosso do Sul"),
    new Estado("MT", "Mato Grosso"),
    new Estado("PA", "Pará"),
    new Estado("PB", "Paraíba"),
    new Estado("PE", "Pernambuco"),
    new Estado("PI", "Piauí"),
    new Estado("PR", "Paraná"),
    new Estado("RJ", "Rio de Janeiro"),
    new Estado("RN", "Rio Grande do Norte"),
    new Estado("RO", "Rondônia"),
    new Estado("RR", "Roraima"),
    new Estado("RS", "Rio Grande do Sul"),
    new Estado("SC", "Santa Catarina"),
    new Estado("SE", "Sergipe"),
    new Estado("SP", "São Paulo")
  ]
  constructor() { }

  getEstados(){
    return this.estados;
  }
}
