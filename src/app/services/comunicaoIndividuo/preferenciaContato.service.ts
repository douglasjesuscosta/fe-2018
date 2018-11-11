import { PreferenciaContato } from '../../models/comunicaoIndividuo/preferenciaContato.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreferenciaContatoService {
    
    private preferenciasContato: PreferenciaContato[] = [
        new PreferenciaContato(1, 'Horário comercial', 'B'),
        new PreferenciaContato(2, 'Durante o dia', 'D'),
        new PreferenciaContato(3, 'Finais de Semana', 'S'),
        new PreferenciaContato(4, 'Qualquer hora', 'A'),
        new PreferenciaContato(5, 'Período noturno', 'E')
    ];
    
    getPreferenciasContato() {
      return this.preferenciasContato.slice();
    }
    
    getPreferenciaContato(index: number) {
      return this.preferenciasContato[index];
    }
}  