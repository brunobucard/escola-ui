import { Sala } from './../core/model';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import * as moment from 'moment';
import { MoneyHttp } from '../seguranca/money-http';

import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

export class SalaFiltro {
  sala: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})

export class SalaService {

  salasUrl: string;

  constructor(private http: MoneyHttp) {
    this.salasUrl = `${environment.apiUrl}/salas`;
   }

   pesquisar(filtro: SalaFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.sala) {
      params = params.append('sala', filtro.sala);
    }

    return this.http.get<any>(`${this.salasUrl}`, { params })
      .toPromise()
      .then(response => {
        const salas = response.content;

        const resultado = {
          salas,
          total: response.totalElements
        };

        return resultado;
      });
  }

   listarTodas(): Promise<any> {
     return this.http.get<any>(this.salasUrl)
      .toPromise()
      .then(response => response.content);
   }

   excluir(codigo: number): Promise<void> {
     return this.http.delete(`${this.salasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
   }

   adicionar(sala: Sala): Promise<Sala> {
     return this.http.post<Sala>(this.salasUrl, sala)
      .toPromise();
   }

   atualizar(sala: Sala): Promise<Sala> {
     return this.http.put<Sala>(`${this.salasUrl}/${sala.codigo}`, sala)
      .toPromise();
   }

   buscarPorCodigo(codigo: number): Promise<Sala> {
     return this.http.get<Sala>(`${this.salasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const sala = response;

        return sala;
      });
   }

   listarSalas(): Promise<Sala[]> {
     return this.http.get<Sala[]>(this.salasUrl)
      .toPromise();
   }

}
