import { Injectable } from '@angular/core';

import { Relacionamento } from '../../models/vinculoIndividuo/relacionamentosIndividuo.model';

@Injectable({
  providedIn: 'root'
})
export class RelacionamentosService {

  private relacionamentos: Relacionamento[] = [
    new Relacionamento(1, 'Avó materna'),
    new Relacionamento(2, 'Avô materno'),
    new Relacionamento(3, 'Conjugue/companheiro(a)'),
    new Relacionamento(4, 'Irmão'),
    new Relacionamento(5, 'Irmã'),
    new Relacionamento(6, 'Meio-irmão'),
    new Relacionamento(7, 'Meia-irmã'),
    new Relacionamento(8, 'Irmãos'),
    new Relacionamento(9, 'Criança'),
    new Relacionamento(10, 'Filha'),
    new Relacionamento(11, 'Avó paterna'),
    new Relacionamento(12, 'Avô paterna'),
    new Relacionamento(13, 'Tio paterno'),
    new Relacionamento(14, 'Tio materna'),
    new Relacionamento(15, 'Tia paterna'),
    new Relacionamento(16, 'Tia materna'),
    new Relacionamento(17, 'Recem-nascidos'),
    new Relacionamento(18, 'Pais'),
    new Relacionamento(19, 'Mãe adotiva'),
    new Relacionamento(20, 'Pai adotivo'),
    new Relacionamento(21, 'Responsável'),    
    new Relacionamento(22, 'Coabitante')
  ];

  getRelacionamentos() {
    return this.relacionamentos.slice();
  }

  getRelacionamento(index: number) {
    return this.relacionamentos[index];
  } 
}
