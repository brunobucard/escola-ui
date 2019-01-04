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


}
