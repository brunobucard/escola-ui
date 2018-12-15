import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/components/common/messageservice';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ResponsavelFiltro, ResponsavelService } from './../responsavel.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-responsavel-pesquisa',
  templateUrl: './responsavel-pesquisa.component.html',
  styleUrls: ['./responsavel-pesquisa.component.css']
})
export class ResponsavelPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new ResponsavelFiltro();
  responsaveis = [];
  @ViewChild('tabela') grid;

  constructor(
    private responsavelService: ResponsavelService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de responsáveis');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.responsavelService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.responsaveis = resultado.responsaveis;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(responsavel: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(responsavel);
      }
    });
  }

  excluir(responsavel: any) {
    this.responsavelService.excluir(responsavel.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Responsável excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
