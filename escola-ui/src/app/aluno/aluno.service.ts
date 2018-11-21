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
}
