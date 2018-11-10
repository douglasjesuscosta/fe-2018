export class GrupoUtilizacao{

    constructor(
        private usoNome?: string,
        private identificadorUso?: number,
        private dataInicioUso?: Date,
        private dataFinalUso?: Date
    ){}

    public get p_usoNome(): string{
        return this.usoNome;
    }

    public set p_usoNome(usoNome: string){
        this.usoNome = usoNome;
    }

    public get p_identificadorUso(): number{
        return this.identificadorUso;
    }

    public set p_identificadorUso(identificadorUso: number){
        this.identificadorUso = identificadorUso;
    }

    public get p_dataInicioUso(): Date{
        return this.dataInicioUso;
    }

    public set p_dataInicioUso(dataInicioUso: Date){
        this.dataInicioUso = dataInicioUso;
    }

    public get p_dataFinalUso(): Date {
        return this.dataFinalUso;
    }

    public set p_dataFinalUso(dataFinalUso: Date){
        this.dataFinalUso = dataFinalUso;
    }
}