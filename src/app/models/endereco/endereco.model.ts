import { TipoEndereco } from "src/app/models/endereco/tipo-endereco.model";
import { LinhaEndereco } from "./linha-endereco.model";

export class Endereco{

    constructor(
        private linhaEndereco: LinhaEndereco,
        private bairro: string,
        private municipio: string,
        private codMunicipio: number,
        private estado: string,
        private codPostal: number,
        private caixPostal: number,
        private identificadorPais: number,
        private tipoEndereco: TipoEndereco,
        private codEndereco: number

    ){}

    public get p_linhaEndereco(): LinhaEndereco {
        return this.linhaEndereco;
    }

    public set p_linhaEndereco(value: LinhaEndereco) {
        this.linhaEndereco = value;
    }

    public get p_bairro(): string {
        return this.bairro;
    }

    public set p_bairro(value: string) {
        this.bairro = value;
    }

    public get p_municipio(): string {
        return this.municipio;
    }

    public set p_municipio(value: string) {
        this.municipio = value;
    }

    public get p_codMunicipio(): number {
        return this.codMunicipio;
    }

    public set p_codMunicipio(value: number) {
        this.codMunicipio = value;
    }

    public get p_estado(): string {
        return this.estado;
    }

    public set p_estado(value: string) {
        this.estado = value;
    }

    public get p_codPostal(): number {
        return this.codPostal;
    }

    public set p_codPostal(value: number) {
        this.codPostal = value;
    }

    public get p_caixPostal(): number {
        return this.caixPostal;
    }

    public set p_caixPostal(value: number) {
        this.caixPostal = value;
    }

    public get p_identificadorPais(): number {
        return this.identificadorPais;
    }

    public set p_identificadorPais(value: number) {
        this.identificadorPais = value;
    }

    public get p_tipoEndereco(): TipoEndereco {
        return this.tipoEndereco;
    }

    public set p_tipoEndereco(value: TipoEndereco) {
        this.tipoEndereco = value;
    }

    public get p_codEndereco(): number {
        return this.codEndereco;
    }

    public set p_codEndereco(value: number) {
        this.codEndereco = value;
    }
    

}