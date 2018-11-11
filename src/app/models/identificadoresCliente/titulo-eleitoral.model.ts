import { Identificador } from "./identificador.model";

export class TituloEleitoral extends Identificador{

    constructor(
        private secaoEleitoral?: number,
        private zonaEleitoral?: number

    ){
        super()
    }

    public get p_secaoEleitoral(): number{
        return this.secaoEleitoral;
    }

    public set p_secaoEleitoral(secaoEleitoral: number){
        this.secaoEleitoral = secaoEleitoral;
    }

    public get p_zonaEleitoral(): number {
        return this.zonaEleitoral;
    }

    public set p_zonaEleitoral(zoneEleitoral: number){
        this.zonaEleitoral = zoneEleitoral;
    }
}