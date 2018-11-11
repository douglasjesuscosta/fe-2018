import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NomesCliente } from '../../models/nome/nome.model';
import { IndicadorUsoService } from '../../services/nome/indicador-uso.service';
import { IndicadorUso } from '../../models/nome/indicador-uso.model';
import { UsoNome } from '../../models/nome/uso-nome-model';
import { UsoNomeService } from '../../services/nome/uso-nome.service';
import { GrupoUtilizacao } from '../../models/nome/grupo-utilizacao.model';

@Component({
  selector: 'app-nome-individuo',
  templateUrl: './nome-individuo.component.html',
  styleUrls: ['./nome-individuo.component.css']
})
export class NomeIndividuoComponent implements OnInit {

  constructor(private indicUsoService: IndicadorUsoService,
              private usosNomeService: UsoNomeService) { }

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
  private usosNome: UsoNome[];

  private nomeAtribuido: string;
  private sufixo: string;
  public titulo: string;
  private sobrenome: string;


  ngOnInit() {
    this.nome = new NomesCliente();
    this.indicadores = this.indicUsoService.getIndicUso();
    this.usosNome = this.usosNomeService.getUsosNome();

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

  submit(f){
    this.nome.p_indicadorUso = f.value.indicadorUsoOpcional;
    this.nome.p_nomeAlternativo = f.value.representAlt;

    var grupUlt = new GrupoUtilizacao();
    grupUlt.p_identificadorUso = f.value.usoNome;
    grupUlt.p_dataInicioUso = f.value.dataInicio;
    grupUlt.p_dataFinalUso = f.value.dataFinal;

    this.nome.p_grupoUtilizacao = grupUlt;  

    console.log(this.nome);
  }
}
