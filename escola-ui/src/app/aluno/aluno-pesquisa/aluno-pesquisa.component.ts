import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-pesquisa',
  templateUrl: './aluno-pesquisa.component.html',
  styleUrls: ['./aluno-pesquisa.component.css']
})
export class AlunoPesquisaComponent {

  alunos = [
    { nome: 'Bruno', sexo: 'Masculino'},
    { nome: 'Ana Elisa', sexo: 'Feminino'}

  ];

}
