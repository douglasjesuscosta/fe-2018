import { Injectable } from '@angular/core';
import { TipoIdentificador } from '../../models/identificadoresCliente/tipo-identificador.model';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificadorService {

  private tipoindetificadores: TipoIdentificador[] = [
    new TipoIdentificador("Carteira de trabalho", 1),
    new TipoIdentificador("Certidão de nascimento, casamento ou divórcio", 2),
    new TipoIdentificador("Titulo de eleitor", 3),
    new TipoIdentificador("Outro", 5),
  ]

  constructor() { }

  getTiposIdentificadores(){
    return this.tipoindetificadores;
  }

}
