import { MeioComunicacao } from '../../models/comunicaoIndividuo/meioComunicacao.model';

export class MeioComunicaoService {
    
    private meiosComunicacao: MeioComunicacao[] = [
        new MeioComunicacao(1, 'Telefone (excluindo o celular)', 'T'),
        new MeioComunicacao(2, 'Telefone celular', 'C'),
        new MeioComunicacao(3, 'Fax', 'F'),
        new MeioComunicacao(4, 'Pager', 'P'),
        new MeioComunicacao(5, 'Correio eletronico', 'E'),
        new MeioComunicacao(6, 'URL', 'U'),
        new MeioComunicacao(6, 'Outro', 'O')
    ];
    
    getIngredients() {
      return this.meiosComunicacao.slice();
    }
    
    getIngredient(index: number) {
      return this.meiosComunicacao[index];
    }
}      