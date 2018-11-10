export class MeioComunicacao {
    
    constructor(
        private codigo ?: Number,
        private descricao ?: String,
        private codigoAlt ?: String
    ){}
    
    public get p_codigo() {
        return this.codigo;
    }

    public set p_codigo(codigo : Number) {
        this.codigo = codigo;
    }
    
    public get p_descricao() {
        return this.descricao;
    }

    public set p_descricao(descricao : String) {
        this.descricao = descricao;
    }

    public get p_codigoAlt() {
        return this.codigoAlt;
    }

    public set p_codigoAlt(codigoAlt : String) {
        this.codigoAlt = codigoAlt;
    }

}