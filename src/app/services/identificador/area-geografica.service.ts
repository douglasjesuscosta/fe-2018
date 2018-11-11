import { AreaGeografica } from "../../models/identificadoresCliente/area-geografica-model";
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class AreaGeograficaService {

    constructor(){}

    private areasGeograficas: AreaGeografica[] = [
        new AreaGeografica(1, "Identificador do sujeito local", "L"),
        new AreaGeografica(2, "Identificador da área, região ou distrito", "A"),
        new AreaGeografica(1, "Identificador do estado, província ou território", "E"),
        new AreaGeografica(1, "Identificador nacional", "N"),
    ]

    public getAreasGeograficas():AreaGeografica[]{
        return this.areasGeograficas;
    }

} 