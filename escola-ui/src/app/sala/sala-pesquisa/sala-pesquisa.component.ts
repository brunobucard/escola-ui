import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { SalaFiltro, SalaService } from './../sala.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sala-pesquisa',
  templateUrl: './sala-pesquisa.component.html',
  styleUrls: ['./sala-pesquisa.component.css']
})
export class SalaPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new SalaFiltro();
  salas = [];
  @ViewChild('tabela') grid;

  constructor(
    private salaService: SalaService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de salas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.salaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.salas = resultado.salas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExlusao(sala: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(sala);
      }
    });
  }

  excluir(sala: any) {
    this.salaService.excluir(sala.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Turma excluída com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}
