import { UtilizacaoContato } from '../../models/comunicaoIndividuo/utilizacaoContato.model';

export class UtilizacaoContatoService {
    
    private utilizacoesContato: UtilizacaoContato[] = [
        new UtilizacaoContato(1, 'Comercial', 'B'),
        new UtilizacaoContato(2, 'Pessoal', 'P'),
        new UtilizacaoContato(3, 'Tanto comercial quanto pessoal', 'A'),
    ];
    
    getUtilizacoesContato() {
      return this.utilizacoesContato.slice();
    }
    
    getutilizacaoContato(index: number) {
      return this.utilizacoesContato[index];
    }
}  