import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { MoneyHttp } from '../seguranca/money-http';

import 'rxjs/add/operator/toPromise';
import { config } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  seriesUrl: string;

  constructor(
    private http: MoneyHttp
  ) {
    this.seriesUrl = `${environment.apiUrl}/series`;
   }

   listarTodos(): Promise<any> {
    return this.http.get<any>(this.seriesUrl)
     .toPromise()
     .then(response => response.content);
  }
}
