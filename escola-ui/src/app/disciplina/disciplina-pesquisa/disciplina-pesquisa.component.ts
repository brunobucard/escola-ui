import { Component, OnInit, ViewChild } from '@angular/core';
import { DisciplinaFiltro, DisciplinaService } from './../disciplina.service';
import { AlunoGridComponent } from 'src/app/aluno/aluno-grid/aluno-grid.component';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ConfirmationService, MessageService, LazyLoadEvent } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-disciplina-pesquisa',
  templateUrl: './disciplina-pesquisa.component.html',
  styleUrls: ['./disciplina-pesquisa.component.css']
})
export class DisciplinaPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new DisciplinaFiltro();
  disciplinas = [];
  @ViewChild('tabela') grid;

  constructor(
    private disciplinaService: DisciplinaService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de disciplinas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.disciplinaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.disciplinas = resultado.disciplinas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(disciplina: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(disciplina);
      }
    });
  }

  excluir(disciplina: any) {
    this.disciplinaService.excluir(disciplina.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Disciplina excluída com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
