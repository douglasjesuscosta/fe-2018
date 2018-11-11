import { Relacionamento } from './relacionamentosIndividuo.model';

export class Vinculo {
    constructor(
        private identificador ?: String,
        private relacionamento ?: Relacionamento,
        private dataInicial ?: Date,
        private dataFinal ?: Date
    ){}

    public get p_identificador() {
        return this.identificador;
    }

    public set p_identificador(identificador : String) {
        this.identificador = identificador;
    }

    public get p_relacionamento() {
        return this.relacionamento;
    }

    public set p_relacionamento(relacionamento : Relacionamento) {
        this.relacionamento = relacionamento;
    }

    public get p_dataInicial() {
        return this.dataInicial;
    }

    public set p_dataInicial(dataInicial : Date) {
        this.dataInicial = dataInicial;
    }

    public get p_dataFinal() {
        return this.dataFinal;
    }

    public set p_dataFinal(dataFinal : Date) {
        this.dataFinal = dataFinal;
    }
}