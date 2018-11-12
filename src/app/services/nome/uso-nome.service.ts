import { Injectable } from '@angular/core';
import { UsoNome } from '../../models/nome/uso-nome-model';

@Injectable({
  providedIn: 'root'
})
export class UsoNomeService {

  private usosNome: UsoNome[] = [
    new UsoNome(1, "Relatório"),
    new UsoNome(2, "Nome de recém-nascido"),
    new UsoNome(3, "Nome profissional ou comercial"),
    new UsoNome(4, "Nome de solteiro"),
    new UsoNome(5, "Nome registrado"),
    new UsoNome(8, "Outro nome")
  ]

  constructor() { }

  getUsosNome(){
    return this.usosNome;
  }
}
