import { Aluno } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Endereco } from '../../core/model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  sexos = [
    { label: 'Masculino', value: 'MASCULINO'},
    { label: 'Feminino', value: 'FEMININO'}
  ];

  aluno = new Aluno();
  cep = new Endereco();

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private errorHandlerService: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de aluno');
  }

  buscar() {
    this.alunoService.buscar(this.cep.cep)
      .then((cep: Endereco) => this.cep = cep);
  }

}
