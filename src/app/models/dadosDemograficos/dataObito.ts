export class DataObito{
    constructor(
        private dataObito?: Date,
        private acuraciaDataObito?: string,
        private fonteNotificacaoObito?: string
    )
    {}

    public get p_dataObito(): Date{
        return this.dataObito;
    }

    public set p_dataObito(dataObito: Date) {
        this.dataObito = dataObito;
    }

    public get p_acuraciaDataObito(): string{
        return this.acuraciaDataObito;
    }

    public set p_acuraciaDataObito(acuraciaDataObito: string) {
        this.acuraciaDataObito = acuraciaDataObito;
    }

    public get p_fonteNotificacaoObito(): string {
        return this.fonteNotificacaoObito;
    }

    public set p_fonteNotificacaoObito(fonteNotificacaoObito: string){
        this.fonteNotificacaoObito = fonteNotificacaoObito;
    }
}