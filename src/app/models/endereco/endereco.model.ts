import { TipoEndereco } from "src/app/models/endereco/tipo-endereco.model";

export class Endereco{

    constructor(
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

}