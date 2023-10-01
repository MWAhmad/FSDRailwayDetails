import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpressTable } from '../express-table/ExpTable';

@Injectable({
  providedIn: 'root'
})
export class ExpressTableService {

  constructor(private Http: HttpClient) { }

  getExpressDetails(){
    return this.Http.get<ExpressTable[]>('/api/controller');
  }
}
