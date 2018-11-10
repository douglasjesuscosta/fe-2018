export class Identificador{

    constructor(
        private descricao?: number,
        private codigo?: number,
        private dataEmissao?: Date,
        private tipoIdentificador?: number){}

    public get p_descricao(){
        return this.descricao;
    }

    public set p_descricao(descricao:number){
        this.descricao = descricao;
    }

    public get p_codigo(): number {
        return this.codigo;
    }

    public set p_codigo(codigo:number){
        this.codigo = codigo;
    }

    public get p_dataEmissao(){
        return this.dataEmissao;
    }

    public set p_dataEmissao(data: Date){
        this.dataEmissao = data;
    }

    public get p_tipoIdentificador(){
        return this.tipoIdentificador;
    }

    public set p_tipoIdentificador(tipoIdentificador: number){
        this.tipoIdentificador = tipoIdentificador;
    }
}