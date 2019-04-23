import { Injectable } from '@angular/core';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from '../../environments/environment';
import { HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import { config } from 'rxjs';
import { Disciplina } from '../core/model';


export class DisciplinaFiltro {
  descricao: string;
  pagina = 0;
  itensPorPagina = 5;
}


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  disciplinasUrl: string;

  constructor(
    private http: MoneyHttp
  ) {
    this.disciplinasUrl = `${environment.apiUrl}/disciplinas`;
  }

  pesquisar(filtro: DisciplinaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.descricao) {
      params = params.append('descricao', filtro.descricao);
    }

    return this.http.get<any>(`${this.disciplinasUrl}`, { params })
      .toPromise()
      .then(response => {
        const disciplinas = response.content;

        const resultado = {
          disciplinas,
          total: response.totalElements
        };

        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.disciplinasUrl)
      .toPromise()
      .then(response => response.content);
  }

  excluir (codigo: number): Promise<void> {
    return this.http.delete(`${this.disciplinasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(disciplina: Disciplina): Promise<Disciplina> {
    return this.http.post<Disciplina>(this.disciplinasUrl, disciplina)
      .toPromise();
  }

  atualizar(disciplina: Disciplina): Promise<Disciplina> {
    return this.http.put<Disciplina>(`${this.disciplinasUrl}/${disciplina.codigo}`, disciplina)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Disciplina> {
    return this.http.get<Disciplina>(`${this.disciplinasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const disciplina = response;

        return disciplina;
      });
  }
}
