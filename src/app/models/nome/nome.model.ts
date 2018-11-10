import { GrupoUtilizacao } from "./grupo-utilizacao.model";

export class NomesCliente{

    constructor(
        private nomesAtribuidos?: string[],
        private sobrenomes?: string[],
        private sufixos?: string[],
        private indicadorUso?: number,
        private nomeAlternativo?: string,
        private grupoUtilizacao?: GrupoUtilizacao
    ){}

    public get p_nomesAtribuidos(): string[] {
        return this.nomesAtribuidos;
    }

    public set p_nomesAtribuidos(nomesAtribuidos: string[]){
        this.nomesAtribuidos = nomesAtribuidos;
    }

    public get p_sobrenomes(): string[]{
        return this.sobrenomes;
    }

    public set p_sobrenomes(sobrenomes: string[]){
        this.sobrenomes = sobrenomes;
    }

    public get p_sufixos(): string[] {
        return this.sufixos;
    }

    public set p_sufixos(sufixos: string[]){
        this.sufixos = sufixos;
    }

    public get p_indicadorUso(): number {
        return this.indicadorUso;
    }

    public set p_indicadorUso(indicadorUso: number){
        this.indicadorUso = indicadorUso;
    }

    public get p_nomeAlternativo(): string {
        return this.nomeAlternativo;
    }

    public set p_nomeAlternativo(nomeAlternativo: string){
        this.nomeAlternativo = nomeAlternativo;
    }

    public get p_grupoUtilizacao(): GrupoUtilizacao {
        return this.grupoUtilizacao;
    }

    public set p_grupoUtilizacao(grupoUtilizacao: GrupoUtilizacao){
        this.grupoUtilizacao = grupoUtilizacao;
    }
}