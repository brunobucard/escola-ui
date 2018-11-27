import { FormControl } from '@angular/forms';
import { Aluno } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Endereco } from '../../core/model';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

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

  sanguineos = [
    { label: 'A-', value: 'A_NEGATIVO'},
    { label: 'A+', value: 'A_POSITIVO'},
    { label: 'B-', value: 'B_NEGATIVO'},
    { label: 'B+', value: 'B_POSITIVO'},
    { label: 'O-', value: 'O_NEGATIVO'},
    { label: 'O+', value: 'O_POSITIVO'},
    { label: 'AB-', value: 'AB_NEGATIVO'},
    { label: 'AB+', value: 'AB_POSITIVO'}
  ];

  aluno = new Aluno();
  cep = new Endereco();

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const codigoAluno = this.route.snapshot.params['codigo'];

    this.title.setTitle('Cadastro de aluno');

    if (codigoAluno) {
      this.carregarAluno(codigoAluno);
    }
  }

  get editando() {
    return Boolean(this.aluno.codigo);
  }

  carregarAluno(codigo: number) {
    this.alunoService.buscarPorCodigo(codigo)
      .then(aluno => {
        this.aluno = aluno;

        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarAluno(form);
    } else {
      this.adicionarAluno(form);
    }
  }

  adicionarAluno(form: FormControl) {
    this.alunoService.adicionar(this.aluno)
      .then(alunoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Aluno adicionado com sucesso!'});
        this.router.navigate(['/alunos', alunoAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarAluno(form: FormControl) {
    this.alunoService.atualizar(this.aluno)
      .then(aluno => {
        this.aluno = aluno;

        this.messageService.add({ severity: 'success', detail: 'Aluno alterado com sucesso!'});
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.aluno = new Aluno();
    }.bind(this), 1);

    this.router.navigate(['/alunos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle('Edição de aluno: ${this.aluno.nome}');
  }

  buscar() {
    this.alunoService.buscar(this.cep.cep)
      .then((cep: Endereco) => this.cep = cep);
  }

}
