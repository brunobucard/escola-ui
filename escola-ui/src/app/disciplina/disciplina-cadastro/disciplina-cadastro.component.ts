import { Component, OnInit } from '@angular/core';
import { Disciplina } from './../../core/model';
import { DisciplinaService } from '../disciplina.service';
import { MessageService } from 'primeng/api';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {

  disciplina = new Disciplina();

  constructor(
    private disciplinaService: DisciplinaService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const codigoDisciplina = this.route.snapshot.params['codigo'];

    this.title.setTitle('Cadastro de disciplina');

    if (codigoDisciplina) {
      this.carregarDisciplina(codigoDisciplina);
    }

  }

  get editando() {
    return Boolean(this.disciplina.codigo);
  }

  carregarDisciplina(codigo: number) {
    this.disciplinaService.buscarPorCodigo(codigo)
      .then(disciplina => {
        this.disciplina = disciplina;

        this.atualizarTituloEdicao();
      })
        .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarDisciplina(form);
    } else {
      this.adicionarDisciplina(form);
    }
  }
  adicionarDisciplina(form: FormControl) {
    this.disciplinaService.adicionar(this.disciplina)
    .then(disciplinaAdicionada => {
      this.messageService.add({ severity: 'success', detail: 'Disciplina adicionada com sucesso!'});
      this.router.navigate(['/disciplinas', disciplinaAdicionada.codigo]);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarDisciplina(form: FormControl) {
    this.disciplinaService.atualizar(this.disciplina)
      .then(disciplina => {
        this.disciplina = disciplina;

        this.messageService.add({ severity: 'success', detail: 'Disciplina alterada com sucesso!'});
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.disciplina = new Disciplina();
    }.bind(this), 1);

    this.router.navigate(['disciplinas/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de disciplina ${this.disciplina.descricao}`);
  }


}
