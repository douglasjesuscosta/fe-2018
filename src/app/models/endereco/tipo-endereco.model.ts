export class TipoEndereco{
 
    constructor(
        private dataInicialEnderco ?: Date,
        private dataFinalEndereco ?: Date,
        private indicadorAcuraciaDataInicial ?: string,
        private indicadorAcuraciaDataFinal ?: string

    ){}

    public get p_dataInicialEnderco(): Date {
        return this.dataInicialEnderco;
    }

    public set p_dataInicialEnderco(value: Date) {
        this.dataInicialEnderco = value;
    }

    public get p_dataFinalEndereco(): Date {
        return this.dataFinalEndereco;
    }

    public set p_dataFinalEndereco(value: Date) {
        this.dataFinalEndereco = value;
    }

    public get p_indicadorAcuraciaDataInicial(): string {
        return this.indicadorAcuraciaDataInicial;
    }

    public set p_indicadorAcuraciaDataInicial(value: string) {
        this.indicadorAcuraciaDataInicial = value;
    }

    public get p_indicadorAcuraciaDataFinal(): string {
        return this.indicadorAcuraciaDataFinal;
    }

    public set p_indicadorAcuraciaDataFinal(value: string) {
        this.indicadorAcuraciaDataFinal = value;
    }
  


}