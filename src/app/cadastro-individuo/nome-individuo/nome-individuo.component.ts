import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NomesCliente } from '../../models/nome/nome.model';

@Component({
  selector: 'app-nome-individuo',
  templateUrl: './nome-individuo.component.html',
  styleUrls: ['./nome-individuo.component.css']
})
export class NomeIndividuoComponent implements OnInit {

  constructor() { }

  private nome: NomesCliente;
  private numTitulos: number = 0;
  private numNomes: number = 0;
  private numSufixos: number = 0;
  private numSobrenomes: number =0;

  private titulos: string[];
  private sufixos: string[];
  private nomes: string[];
  private sobrenomes: string[];

  private nomeAtribuido: string;
  private sufixo: string;
  private titulo: string;
  private sobrenome: string;


  ngOnInit() {
    this.nome = new NomesCliente();

    this.nomes = [];
    this.titulos = [];
    this.sufixos = [];
    this.sobrenomes = [];
  }

  addNomeAtribuido(){
    if(this.numNomes < 9){
      this.nome.p_nomesAtribuidos.push(this.nomeAtribuido);
    }
  }

  addTitulo(titulo){
    console.log(titulo.viewModel);
    if(this.numTitulos < 9){
      this.nome.p_titulos.push(titulo.viewModel);
      this.titulos = this.nome.p_titulos;
      this.numTitulos++;
    }
  }

}
