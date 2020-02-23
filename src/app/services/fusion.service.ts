import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionsDeliveryDao } from './daos/fusion';
import {Observable} from 'rxjs';

const root = 'api';

@Injectable({providedIn: 'root'})
class FusionService {
  constructor(private http: HttpClient) { }

  getTransactions(transactionType: string, body: any): Observable<TransactionsDeliveryDao> {
    const uri = `${root}/transactions/${transactionType}`;
    console.log(body)
    return this.http.post<TransactionsDeliveryDao>(uri, body);
  }
}

export { FusionService }
