import { Aluno } from './../core/model';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

export class AlunoFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 5;
}




@Injectable()
export class AlunoService {

  alunosUrl: string;

  constructor(private http: MoneyHttp) {
    this.alunosUrl = `${environment.apiUrl}/alunos`;
  }

  pesquisar(filtro: AlunoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.alunosUrl}`, { params })
      .toPromise()
      .then(response => {
        const alunos = response.content;

        const resultado = {
          alunos,
          total: response.totalElements
        };

        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.alunosUrl)
      .toPromise()
      .then(response => response.content);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.alunosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(aluno: Aluno): Promise<Aluno> {
    return this.http.post<Aluno>(this.alunosUrl, aluno)
      .toPromise();
  }

  atualizar(aluno: Aluno): Promise<Aluno> {
    return this.http.put<Aluno>(`${this.alunosUrl}/${aluno.codigo}`, aluno)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Aluno> {
    return this.http.get<Aluno>(`${this.alunosUrl}/${codigo}`)
      .toPromise();
  }

  buscar(cep: string) {
    this.http.get('http://viacep.com.br/ws/${cep}/json/')
      .toPromise()
      .then( response => {
        console.log(response);
      });
  }

}
