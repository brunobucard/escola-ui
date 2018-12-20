import { Title } from '@angular/platform-browser';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { TurmaFiltro, TurmaService } from './../turma.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-turma-pesquisa',
  templateUrl: './turma-pesquisa.component.html',
  styleUrls: ['./turma-pesquisa.component.css']
})
export class TurmaPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new TurmaFiltro();
  turmas = [];
  @ViewChild('tabela') grid;

  constructor(
    private turmaService: TurmaService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de turmas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.turmaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.turmas = resultado.turmas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(turma: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(turma);
      }
    });
  }

  excluir(turma: any) {
    this.turmaService.excluir(turma.codigo)
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
