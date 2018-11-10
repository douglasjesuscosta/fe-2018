import { Identificador } from "./identificador.model";

export class CertNascCasDiv extends Identificador{
    constructor(
        private nomeCartorio?: string,
        private livro?: number,
        private folha?: number,
        private termo?: number

    ){
        super();
    }
    
    public get p_nomeCartorio(): string {
        return this.nomeCartorio;
    }

    public set p_nomeCartorio(nomeCartorio: string){
        this.nomeCartorio = nomeCartorio;
    }

    public get p_livro(): number {
        return this.livro;
    }

    public set p_livro(livro: number){
        this.livro = livro;
    }

    public get p_folha(): number {
        return this.folha;
    }

    public set p_folha(folha: number){
        this.folha = folha;
    }

    public get p_termo(): number {
        return this.termo;
    }

    public set p_termo(termo: number){
        this.termo = termo;
    }
}