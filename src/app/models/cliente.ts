import { Identificador } from "./identificador";
import { NomesCliente } from "./nome";

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