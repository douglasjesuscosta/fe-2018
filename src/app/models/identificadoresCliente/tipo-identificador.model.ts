export class TipoIdentificador{
    constructor(
        private nome?: string,
        private codigo?: number
    ){}
    
    public get p_nome(): string {
        return this.nome;
    }

    public set p_nome(nome: string,) {
        this.nome = nome;
    }

    public get p_codigo(): number {
        return this.codigo;
    }

    public set p_codigo(codigo: number) {
        this.codigo = codigo;
    }

}