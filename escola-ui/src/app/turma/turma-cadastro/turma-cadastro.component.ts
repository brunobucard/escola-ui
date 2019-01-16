import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/api';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { Turma, Sala } from 'src/app/core/model';
import { TurmaService } from '../turma.service';
import { SerieService } from '../../serie/serie.service';
import { SalaService } from '../../sala/sala.service';

@Component({
  selector: 'app-turma-cadastro',
  templateUrl: './turma-cadastro.component.html',
  styleUrls: ['./turma-cadastro.component.css']
})
export class TurmaCadastroComponent implements OnInit {

  periodos = [
    { label: 'Manhã', value: 'MANHA'},
    { label: 'Tarde', value: 'TARDE'},
    { label: 'Noite', value: 'NOITE'},
    { label: 'Integral', value: 'INTEGRAL'},
  ];

  series = [];
  salas = [];

  turma = new Turma();


  constructor(
    private turmaService: TurmaService,
    private serieService: SerieService,
    private salaService: SalaService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {

    const codigoTurma = this.route.snapshot.params['codigo'];

    this.title.setTitle('Cadastro de turma');

    if (codigoTurma) {
      this.carregarTurma(codigoTurma);
    }

    this.carregarSeries();

    this.carregarSalas();


  }

  get editando() {
    return Boolean(this.turma.codigo);
  }

  carregarTurma(codigo: number) {
    this.turmaService.buscarPorCodigo(codigo)
      .then(turma => {
        this.turma = turma;

        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarTurma(form);
    } else {
      this.adicionarTurma(form);
    }
  }

  adicionarTurma(form: FormControl) {
    this.turmaService.adicionar(this.turma)
      .then(turmaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Turma adicionada com sucesso!'});
        this.router.navigate(['/turmas', turmaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarTurma(form: FormControl) {
    this.turmaService.atualizar(this.turma)
      .then(turma => {
        this.turma = turma;

        this.messageService.add({ severity: 'success', detail: 'Turma alterada com sucesso!'});
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.turma = new Turma();
    }.bind(this), 1);

    this.router.navigate(['/turmas/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de turma ${this.turma.turma}`);
  }

  carregarSeries() {
    this.turmaService.listarSeries()
      .then(series => {
        this.series = series.map(s => ({ label: s.descricao, value: s.codigo }));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  carregarSalas() {
    this.salaService.listarTodas()
      .then(salas => {
        this.salas = salas.map(sala => ({ label: sala.sala, value: sala.codigo}));
      })
      .catch(erro => this.errorHandler.handle(erro));
  }




}
