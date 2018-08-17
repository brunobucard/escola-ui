import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aluno-grid',
  templateUrl: './aluno-grid.component.html',
  styleUrls: ['./aluno-grid.component.css']
})
export class AlunoGridComponent {

  @Input() alunos = [];

}
