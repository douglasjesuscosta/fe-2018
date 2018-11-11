export class UsoNome{
    
    constructor(
        private codigo: number,
        private nome: string
    ){}

    public get p_nome(): string {
        return this.nome;
    }
    public set p_nome(value: string) {
        this.nome = value;
    }
    public get p_codigo(): number {
        return this.codigo;
    }
    public set p_codigo(value: number) {
        this.codigo = value;
    }


}