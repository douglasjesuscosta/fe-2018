export class DataNascimento{

    constructor(
        private dataNascimento: Date,
        private acuraciaDataNascimento: string,
        private seguimentoDataNascimento: boolean

    ){}

    public get p_dataNascimento(): Date {
        return this.dataNascimento;
    }

    public set p_dataNascimento(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }

    public get p_acuraciaDataNascimento(): string {
        return this.acuraciaDataNascimento;
    }

    public set p_acuraciaDataNascimento(acuraciaDataNascimento: string) {
        this.acuraciaDataNascimento = acuraciaDataNascimento;
    }

    public get p_seguimentoDataNascimento(): boolean {
        return this.seguimentoDataNascimento;
    }

    public set p_seguimentoDataNascimento(seguimentoDataNascimento: boolean){
        this.seguimentoDataNascimento = seguimentoDataNascimento;
    }
}