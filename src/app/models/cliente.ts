import { Identificador } from "./identificadoresCliente/identificador.model";
import { NomesCliente } from "./nome/nome.model";

class Cliente {
    constructor(
        private identificadores: Identificador[],
        private nomesCliente: NomesCliente

    ){}

    public get p_identificadores(): Identificador[] {
        return this.identificadores;
    }

    public set p_identificadores(identificadores: Identificador[]){
        this.identificadores = identificadores;
    }

}