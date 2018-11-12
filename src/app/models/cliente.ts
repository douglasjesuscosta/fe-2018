import { Identificador } from "./identificadoresCliente/identificador.model";
import { NomesCliente } from "./nome/nome.model";
import { DadosDemograficosAdicionais } from "./dadosDemograficos/dados-demograficos-adicionais.model";
import { VinculoIndividuoComponent } from "../cadastro-individuo/vinculo-individuo/vinculo-individuo.component";
import { Vinculo } from "./vinculoIndividuo/vinculo.model";
import { ComunicaoIndividuo } from "./comunicaoIndividuo/comunicacaoIndividuo.model";

class Cliente {
    
    constructor(
        private identificador: Identificador,
        private nomesCliente: NomesCliente,
        private dadosDemograficos: DadosDemograficosAdicionais,
        private vinculoIndividuo: Vinculo,
        private comunicacaoIndividuo: ComunicaoIndividuo
    ){}

    public get p_comunicacaoIndividuo(): ComunicaoIndividuo {
        return this.comunicacaoIndividuo;
    }
    public set p_comunicacaoIndividuo(value: ComunicaoIndividuo) {
        this.comunicacaoIndividuo = value;
    }
    public get p_vinculoIndividuo(): Vinculo {
        return this.vinculoIndividuo;
    }
    public set p_vinculoIndividuo(value: Vinculo) {
        this.vinculoIndividuo = value;
    }
    public get p_dadosDemograficos(): DadosDemograficosAdicionais {
        return this.dadosDemograficos;
    }
    public set p_dadosDemograficos(value: DadosDemograficosAdicionais) {
        this.dadosDemograficos = value;
    }
    public get p_nomesCliente(): NomesCliente {
        return this.nomesCliente;
    }
    public set p_nomesCliente(value: NomesCliente) {
        this.nomesCliente = value;
    }
    public get p_identificadores(): Identificador {
        return this.identificador;
    }
    public set p_identificadores(value: Identificador) {
        this.identificador = value;
    }
}