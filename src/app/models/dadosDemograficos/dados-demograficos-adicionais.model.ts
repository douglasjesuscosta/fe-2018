import { DataNascimento } from "./data-nascimento.model";
import { DataObito } from "./data-obito.model";

export class DadosDemograficosAdicionais{

    constructor(
        private dataNascimento?: DataNascimento,
        private dataObito?: DataObito,
        private sexo?: string,
        private nomeMae?: string,
        private nomePai?: string,
        private situacaoFamilitar?: string,
        private racaCor?: string,
        private pluralidadeNascimento?: string,
        private comentarioIdentificacao?: string,
        private munNascimento?: string,
        private estNascimento?: string,
        private paisNascimento?: string
    ){}

    public get p_dataNascimento(): DataNascimento {
        return this.dataNascimento;
    }

    public set p_dataNascimento(dataNascimento: DataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public get p_dataObito(): DataObito {
        return this.dataObito;
    }

    public set p_dataObito(dataObito: DataObito) {
        this.dataObito = dataObito;
    }

    public get p_sexo(): string {
        return this.sexo;
    }

    public set p_sexo(sexo: string,) {
        this.sexo = sexo;
    }

    public get p_nomeMae(): string {
        return this.nomeMae;
    }

    public set p_nomeMae(nomeMae: string) {
        this.nomeMae = nomeMae;
    }

    public get p_nomePai(): string {
        return this.nomePai;
    }

    public set p_nomePai(nomePai: string) {
        this.nomePai = nomePai;
    }

    public get p_situacaoFamilitar(): string {
        return this.situacaoFamilitar;
    }

    public set p_situacaoFamilitar(situacaoFamilitar: string) {
        this.situacaoFamilitar = situacaoFamilitar;
    }

    public get p_racaCor(): string {
        return this.racaCor;
    }

    public set p_racaCor(racaCor: string) {
        this.racaCor = racaCor;
    }

    public get p_pluralidadeNascimento(): string {
        return this.pluralidadeNascimento;
    }

    public set p_pluralidadeNascimento(pluralidadeNascimento: string) {
        this.pluralidadeNascimento = pluralidadeNascimento;
    }

    public get p_comentarioIdentificacao(): string {
        return this.comentarioIdentificacao;
    }

    public set p_comentarioIdentificacao(comentarioIdentificacao: string){
        this.comentarioIdentificacao = comentarioIdentificacao;
    }

    public get p_munNascimento(): string {
        return this.munNascimento;
    }

    public set p_munNascimento(munNascimento: string) {
        this.munNascimento = munNascimento;
    }

    public get p_estNascimento(): string {
        return this.estNascimento;
    }

    public set p_estNascimento(estNascimento: string){
        this.estNascimento = estNascimento;
    }

    public get p_paisNascimento(): string {
        return this.paisNascimento;
    }

    public set p_paisNascimento(paisNascimento: string) {
        this.paisNascimento = paisNascimento;
    }

}