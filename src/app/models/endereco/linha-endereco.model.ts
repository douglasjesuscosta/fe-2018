    
export class LinhaEndereco{
    
    constructor(
        private abrvTipo?: string,
        private numero?: number,
        private nome?: string,
        private numeroAndar?: number,
        private tipoAndar?: string,
        private complemento?: string,
        private numeroPropriedade?: number,
        private numeroSecaoLote?: number,
        private nomeLogradouro?: string,
        private codigoTipoLograddouro?: number,
        private codigoSufixoLogradouro?: number,
        private setorCensitario?: string

    ){}

    public get p_abrvTipo(): string {
        return this.abrvTipo;
    }

    public set p_abrvTipo(value: string) {
        this.abrvTipo = value;
    }

    public get p_numero(): number {
        return this.numero;
    }

    public set p_numero(value: number) {
        this.numero = value;
    }

    public get p_nome(): string {
        return this.nome;
    }

    public set p_nome(value: string) {
        this.nome = value;
    }

    public get p_numeroAndar(): number {
        return this.numeroAndar;
    }

    public set p_numeroAndar(value: number) {
        this.numeroAndar = value;
    }

    public get p_tipoAndar(): string {
        return this.tipoAndar;
    }

    public set p_tipoAndar(value: string) {
        this.tipoAndar = value;
    }

    public get p_complemento(): string {
        return this.complemento;
    }

    public set p_complemento(value: string) {
        this.complemento = value;
    }

    public get p_numeroPropriedade(): number {
        return this.numeroPropriedade;
    }

    public set p_numeroPropriedade(value: number) {
        this.numeroPropriedade = value;
    }

    public get p_numeroSecaoLote(): number {
        return this.numeroSecaoLote;
    }

    public set p_numeroSecaoLote(value: number) {
        this.numeroSecaoLote = value;
    }

    public get p_nomeLogradouro(): string {
        return this.nomeLogradouro;
    }

    public set p_nomeLogradouro(value: string) {
        this.nomeLogradouro = value;
    }

    public get p_codigoTipoLograddouro(): number {
        return this.codigoTipoLograddouro;
    }

    public set p_codigoTipoLograddouro(value: number) {
        this.codigoTipoLograddouro = value;
    }

    public get p_codigoSufixoLogradouro(): number {
        return this.codigoSufixoLogradouro;
    }

    public set p_codigoSufixoLogradouro(value: number) {
        this.codigoSufixoLogradouro = value;
    }

    public get p_setorCensitario(): string {
        return this.setorCensitario;
    }

    public set p_setorCensitario(value: string) {
        this.setorCensitario = value;
    }

}