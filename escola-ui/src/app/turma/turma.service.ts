import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';
import { MoneyHttp } from '../seguranca/money-http';

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';
import { config } from 'rxjs';
import { Turma, Serie } from '../core/model';

export class TurmaFiltro {
  turma: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  turmasUrl: string;
  seriesUrl: string;

  constructor(private http: MoneyHttp) {
    this.turmasUrl = `${environment.apiUrl}/turmas`;
    this.seriesUrl = `${environment.apiUrl}/series`;
   }

   pesquisar(filtro: TurmaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.turma) {
      params = params.append('turma', filtro.turma);
    }

    return this.http.get<any>(`${this.turmasUrl}`, { params })
      .toPromise()
      .then(response => {
        const turmas = response.content;

        const resultado = {
          turmas,
          total: response.totalElements
        };

        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.turmasUrl)
      .toPromise()
      .then(response => response.content);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.turmasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(turma: Turma): Promise<Turma> {
    return this.http.post<Turma>(this.turmasUrl, turma)
      .toPromise();
  }

  atualizar(turma: Turma): Promise<Turma> {
    return this.http.put<Turma>(`${this.turmasUrl}/${turma.codigo}`, turma)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Turma> {
    return this.http.get<Turma>(`${this.turmasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const turma = response;

        return turma;
      });
  }

  listarSeries(): Promise<any> {
    return this.http.get<any>(this.seriesUrl)
    .toPromise()
      .then(response => response.content);
  }

}
