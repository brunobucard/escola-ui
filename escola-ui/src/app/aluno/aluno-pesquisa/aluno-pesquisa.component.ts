import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { AlunoFiltro, AlunoService } from './../aluno.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunoGridComponent } from '../aluno-grid/aluno-grid.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aluno-pesquisa',
  templateUrl: './aluno-pesquisa.component.html',
  styleUrls: ['./aluno-pesquisa.component.css']
})
export class AlunoPesquisaComponent implements OnInit {

  totalRegistros = 0;
  filtro = new AlunoFiltro();
  alunos = [];
  @ViewChild('tabela') grid;

  constructor(
    private alunoService: AlunoService,
    private errorHandler: ErrorHandlerService,
    private confirmation: ConfirmationService,
    private messageService: MessageService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Pesquisa de alunos');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.alunoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.alunos = resultado.alunos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
  }

  confirmarExclusao(aluno: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(aluno);
      }
    });
  }

  excluir(aluno: any) {
    this.alunoService.excluir(aluno.codigo)
      .then(() => {
        if (this.grid.first === 0) {
          this.pesquisar();
        } else {
          this.grid.first = 0;
        }

        this.messageService.add({ severity: 'success', detail: 'Aluno excluído com sucesso!'});
      })
      .catch(erro => this.errorHandler.handle(erro));
  }



}
