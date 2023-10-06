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
    console.log(this.Http.get<ExpressName>(this.baseApiAddress + `/api/FSDRailway/${'0d363aeb-2471-42d2-8cad-22afa10b8693'}`))
    return this.Http.get<ExpressName[]>(this.baseApiAddress + '/api/FSDRailway')
    // return this.Http.get<ExpressName[]>('https://localhost:7026/api/FSDRailway')
    // return this.Http.get<ExpressName[]>(`/api/api/FSDRailway`);
  }
}
