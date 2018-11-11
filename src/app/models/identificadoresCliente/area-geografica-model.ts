export class AreaGeografica{
    constructor(
        private codigo: number,
        private descricao: string,
        private codigoAlternativo:string
    ){}
    
    public get p_codigo(): number{
        return this.codigo;
    }

    public set p_codigo(codigo: number) {
        this.codigo = codigo;
    }

    public get p_descricao(): string {
        return this.descricao;
    }

    public set p_descricao(descricao: string){
        this.descricao = descricao;
    }

    public get p_codigoAlternativo(): string {
        return this.codigoAlternativo;
    }

    public set p_codigoAlternativo(codigoAlternativo: string) {
        this.codigoAlternativo = codigoAlternativo;
    }
}