import { Injectable } from '@angular/core';
import { TipoIdentificador } from '../../models/identificadoresCliente/tipo-identificador.model';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificadorService {

  private tipoindetificadores: TipoIdentificador[] = [
    new TipoIdentificador("Carteira de trabalho", 1),
    new TipoIdentificador("Certidão de nascimento", 2),
    new TipoIdentificador("Certidão de casamento", 3),
    new TipoIdentificador("Titulo de eleitor", 4),
    new TipoIdentificador("Outro", 5),
  ]

  constructor() { }

  getTiposIdentificadores(){
    return this.tipoindetificadores;
  }


}
