export class Nacionalidade{
    constructor(
        private munNascimento: string,
        private estadoNascimento: string,
        private paisNascimento: string,
        private dataEntradaPais: Date
    ){}

    public get p_munNascimento(): string{
        return this.munNascimento;
    }

    public set p_munNascimento(munNascimento: string) {
        this.munNascimento = munNascimento;
    }

    public get p_estadoNascimento(): string {
        return this.estadoNascimento;
    }

    public set p_estadoNascimento(estadoNascimento: string) {
        this.estadoNascimento = estadoNascimento;
    }

    public get p_paisNascimento(): string {
        return this.paisNascimento;
    }

    public set p_paisNascimento(paisNascimento: string) {
        this.paisNascimento = paisNascimento;
    }

    public get p_dataEntradaPais(): Date {
        return this.dataEntradaPais;
    }

    public set p_dataEntradaPais(dataEntradaPais: Date){
        this.dataEntradaPais = dataEntradaPais;
    }

}