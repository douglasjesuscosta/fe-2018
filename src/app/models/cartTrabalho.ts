import { Identificador } from "./identificador";

export class CartTrabalho extends Identificador{

    constructor(
        private serie?: number,
        private codigoEstado?: number
    ){
        super();
    }

    public get p_serie(): number{
        return this.serie;
    }

    public set p_serie(serie: number,){
        this.serie = serie;
    }

    public get p_codigoEstado(): number {
        return this.codigoEstado;
    }

    public set p_codigoEstado(codigoEstado: number){
        this.codigoEstado = codigoEstado;
    }
}