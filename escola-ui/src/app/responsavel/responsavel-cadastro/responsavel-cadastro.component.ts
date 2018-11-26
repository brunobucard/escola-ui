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

  constructor(
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Cadastro de responsável');
  }

}
