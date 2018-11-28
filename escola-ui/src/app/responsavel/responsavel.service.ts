import { Injectable } from '@angular/core';
import { MoneyHttp } from '../seguranca/money-http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponsavelService {

  responsaveisUrl: string;

  constructor(private http: MoneyHttp) {
    this.responsaveisUrl = `${environment.apiUrl}/responsaveis`;
   }

   listarTodos(): Promise<any> {
     return this.http.get<any>(this.responsaveisUrl)
      .toPromise()
      .then(response => response.content);
   }
}
