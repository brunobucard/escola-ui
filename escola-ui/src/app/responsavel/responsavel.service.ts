import { Responsavel } from './../core/model';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from '../../environments/environment';

import * as moment from 'moment';
import 'rxjs/add/operator/toPromise';
import { config } from 'rxjs';

export class ResponsavelFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  responsaveisUrl: string;

  constructor(
    private http: MoneyHttp
    ) {
    this.responsaveisUrl = `${environment.apiUrl}/responsaveis`;
   }

   pesquisar(filtro: ResponsavelFiltro): Promise<any> {
     let params = new HttpParams({
       fromObject: {
         page: filtro.pagina.toString(),
         size: filtro.itensPorPagina.toString()
       }
     });

     if (filtro.nome) {
       params = params.append('nome', filtro.nome);
     }

     return this.http.get<any>(`${this.responsaveisUrl}`, {params})
      .toPromise()
      .then(response => {
        const responsaveis = response.content;

        const resultado = {
          responsaveis,
          total: response.totalElement
        };

        return resultado;
      });
   }

   listarTodos(): Promise<any> {
     return this.http.get<any>(this.responsaveisUrl)
      .toPromise()
      .then(response => response.content);
   }

   excluir(codigo: number): Promise<void> {
     return this.http.delete(`${this.responsaveisUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
   }

   adicionar(responsavel: Responsavel): Promise<Responsavel> {
     return this.http.post<Responsavel>(this.responsaveisUrl, responsavel)
      .toPromise();
   }

   atualizar(responsavel: Responsavel): Promise<Responsavel> {
    return this.http.put<Responsavel>(`${this.responsaveisUrl}/${responsavel.codigo}`, responsavel)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Responsavel> {
    return this.http.get<Responsavel>(`${this.responsaveisUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const responsavel = response;

        this.converterStringsParaDatas([responsavel]);
        return responsavel;
      });
  }

  private converterStringsParaDatas(responsaveis: Responsavel[]) {
    for (const responsavel of responsaveis) {
      responsavel.dataNascimento = moment(responsavel.dataNascimento,
      'YYYY-MM-DD').toDate();

      if (responsavel.identidadeEmissao) {
        responsavel.identidadeEmissao = moment(responsavel.identidadeEmissao,
          'YYYY-MM-DD').toDate();
      }
    }
  }
}
