import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NomesCliente } from '../../models/nome/nome.model';
import { IndicadorUsoService } from '../../services/nome/indicador-uso.service';
import { IndicadorUso } from '../../models/nome/indicador-uso.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nome-individuo',
  templateUrl: './nome-individuo.component.html',
  styleUrls: ['./nome-individuo.component.css']
})
export class NomeIndividuoComponent implements OnInit {

  constructor(private indicUsoService: IndicadorUsoService, private router: Router, private route: ActivatedRoute) { }

  private nome: NomesCliente;
  private numTitulos: number = 0;
  private numNomes: number = 0;
  private numSufixos: number = 0;
  private numSobrenomes: number =0;

  private titulos: string[];
  private sufixos: string[];
  private nomes: string[];
  private sobrenomes: string[];
  private indicadores: IndicadorUso[];

  private nomeAtribuido: string;
  private sufixo: string;
  public titulo: string;
  private sobrenome: string;


  ngOnInit() {
    this.nome = new NomesCliente();
    this.indicadores = this.indicUsoService.getIndicUso();

    this.nomes = [];
    this.titulos = [];
    this.sufixos = [];
    this.sobrenomes = [];
  }

  submit(){
    this.router.navigate(['../informacoesDemograficas'], {relativeTo: this.route});
  }

  addNomeAtribuido(){
    if(this.numNomes < 9){
      this.nome.p_nomesAtribuidos.push(this.nomeAtribuido);
    }
  }

  addTitulo(titulo){
    console.log(titulo.value);
    if(this.numTitulos < 9){
      this.nome.p_titulos.push(titulo.viewModel);
      this.titulos = this.nome.p_titulos;
      this.numTitulos++;
    }
    titulo = null;
  }

  addSobrenome(sobrenome){
    if(this.numSobrenomes < 9){
      this.nome.p_sobrenomes.push(sobrenome.viewModel);
      this.sobrenomes = this.nome.p_sobrenomes;
      this.numSobrenomes++;
    }
    sobrenome = null;
  }

  addNome(nome){
    console.log(nome.value);
    if(this.numNomes < 9){
      this.nome.p_nomesAtribuidos.push(nome.viewModel);
      this.nomes = this.nome.p_nomesAtribuidos;
      this.numNomes++;
    }
    nome = null;
  }

  addSufixo(sufixo){
    console.log(sufixo.value);
    if(this.numSufixos < 9){
      this.nome.p_sufixos.push(sufixo.viewModel);
      this.sufixos = this.nome.p_sufixos;
      this.numSufixos++;
    }
    sufixo = null;
  }

}
