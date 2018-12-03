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
    this.title.setTitle('Cadastro de responsável');
  }

}
