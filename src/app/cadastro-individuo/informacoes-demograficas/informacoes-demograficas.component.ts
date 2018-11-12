import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacoes-demograficas',
  templateUrl: './informacoes-demograficas.component.html',
  styleUrls: ['./informacoes-demograficas.component.css']
})
export class InformacoesDemograficasComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  submit(){
    this.router.navigate(['../informacoesDemograficas'], {relativeTo: this.route});
  }

}
