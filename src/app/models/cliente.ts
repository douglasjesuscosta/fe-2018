import { Identificador } from "./identificadoresCliente/identificador";
import { NomesCliente } from "./nome/nome";

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