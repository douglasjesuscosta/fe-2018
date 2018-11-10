import { MeioComunicacao } from "./meioComunicacao.model";
import { PreferenciaContato } from "./preferenciaContato.model";
import { UtilizacaoContato } from "./utilizacaoContato.model"

export class comunicaoIndividuo {
    constructor(
        private meioComunicao ?: MeioComunicacao,
        private preferenciaContato ?: PreferenciaContato,
        private detalheComunicao ?: String,
        private utilizacaoContato ?: UtilizacaoContato
    ){}

    public get p_meioComunicacao() {
        return this.meioComunicao;
    }

    public set p_meioComunicação(meioComunicao : MeioComunicacao) {
        this.meioComunicao = meioComunicao;
    }

    public get p_preferenciaContato() {
        return this.preferenciaContato;
    }

    public set p_preferenciaContato(preferenciaContato : PreferenciaContato) {
        this.preferenciaContato = preferenciaContato;
    }

    public get p_detalheComunicao() {
        return this.detalheComunicao;
    }

    public set p_detalheComunicao(detalheComunicao : String) {
        this.detalheComunicao = detalheComunicao;
    }
    
    public get p_utilizacaoContato() {
        return this.utilizacaoContato;
    }

    public set p_utilizacaoContato(utilizacaoContato : UtilizacaoContato) {
        this.utilizacaoContato = utilizacaoContato;
    }
}