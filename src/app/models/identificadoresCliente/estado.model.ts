export class Estado{
    constructor(
        private codigo:string,
        private nome: string
    ){}

    public get p_codigo(): string{
        return this.codigo;
    }

    public set p_codigo(codigo: string) {
        this.codigo = codigo;
    }

    public get p_nome(): string {
        return this.nome;
    }

    public set p_nome(nome: string) {
        this.nome = nome;
    }
}