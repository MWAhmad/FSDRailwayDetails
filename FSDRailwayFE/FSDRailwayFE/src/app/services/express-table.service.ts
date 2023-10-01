import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpressName, ExpressTable } from '../express-table/ExpTable';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressTableService {

  baseApiAddress = environment.apiEndpoint

  constructor(private Http: HttpClient) { }

  // getExpressDetails(){
  //   return this.Http.get<ExpressTable[]>('/api/FSDRailway');
  // }

  getExpressNames() : Observable<ExpressName[]>{
    return this.Http.get<ExpressName[]>(this.baseApiAddress + '/api/FSDRailway')
  }
}
