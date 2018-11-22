import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Endereco } from '../../core/model';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  cep = new Endereco();

  constructor(
    private alunoService: AlunoService
  ) { }

  ngOnInit() {
  }

  buscar() {
    this.alunoService.buscar(this.cep.cep);
  }

}
