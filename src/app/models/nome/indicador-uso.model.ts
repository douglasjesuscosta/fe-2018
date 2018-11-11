export class IndicadorUso{
    
    constructor(
        private codigo?: number,
        private descricao?: string
    )
    {}

    public get p_descricao(): string {
        return this.descricao;
    }
    public set p_descricao(value: string) {
        this.descricao = value;
    }
    public get p_codigo(): number {
        return this.codigo;
    }
    public set p_codigo(value: number) {
        this.codigo = value;
    }
}