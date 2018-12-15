import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsavelService } from './../responsavel.service';
import { Responsavel } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-responsavel-cadastro',
  templateUrl: './responsavel-cadastro.component.html',
  styleUrls: ['./responsavel-cadastro.component.css']
})
export class ResponsavelCadastroComponent implements OnInit {

  sexos = [
    { label: 'Masculino', value: 'MASCULINO'},
    { label: 'Feminino', value: 'FEMININO'}
  ];

  cores = [
    { label: 'Branco', value: 'BRANCO'},
    { label: 'Preto', value: 'PRETO'},
    { label: 'Pardo', value: 'PARDO'},
    { label: 'Amarelo', value: 'AMARELO'},
    { label: 'Indigena', value: 'INDIGENA'},
  ];

  estadosCivis = [
    { label: 'Solteiro', value: 'SOLTEIRO'},
    { label: 'Casado', value: 'CASADO'},
    { label: 'União estável', value: 'UNIAO_ESTAVEL'},
    { label: 'Divorciado', value: 'DIVORCIADO'},
    { label: 'Separado', value: 'SEPARADO'},
    { label: 'Viuvo', value: 'VIUVO'}
  ];

  responsavel = new Responsavel();

  constructor(
    private responsavelService: ResponsavelService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    const codigoResponsavel = this.route.snapshot.params['codigo'];

    this.title.setTitle('Cadastro de responsável');

    if (codigoResponsavel) {
      this.carregarResponsavel(codigoResponsavel);
    }

  }

  get editando() {
    return Boolean(this.responsavel.codigo);
  }

  carregarResponsavel(codigo: number) {
    this.responsavelService.buscarPorCodigo(codigo)
      .then(responsavel => {
        this.responsavel = responsavel;

        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
    if (this.editando) {
      this.atualizarResponsavel(form);
    } else {
      this.adicionarResponsavel(form);
    }
  }

  adicionarResponsavel(form: FormControl) {
    this.responsavelService.adicionar(this.responsavel)
      .then(responsavelAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Responsável adicionado com sucesso!'});
        this.router.navigate(['/responsaveis', responsavelAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarResponsavel(form: FormControl) {
    this.responsavelService.atualizar(this.responsavel)
      .then(responsavel => {
        this.responsavel = responsavel;

        this.messageService.add({ severity: 'success', detail: 'Responsável alterado com sucesso!'});
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  nova(form: FormControl) {
    form.reset();

    setTimeout(function() {
      this.responsavel = new Responsavel();
    }.bind(this), 1);

    this.router.navigate(['/responsaveis/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de responsável ${this.responsavel.nome}`);
  }


}
