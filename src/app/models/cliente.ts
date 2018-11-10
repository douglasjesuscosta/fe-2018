import { Identificador } from "./identificador";

class Cliente {
    constructor(
        private identificadores: Identificador[],

    ){}

    public get p_identificadores(): Identificador[] {
        return this.identificadores;
    }

    public set p_identificadores(identificadores: Identificador[]){
        this.identificadores = identificadores;
    }

    }
}