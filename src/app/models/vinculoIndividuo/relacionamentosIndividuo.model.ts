export class Relacionamento {

    constructor(
        private codigo ?: Number,
        private descricao ?: String
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
}