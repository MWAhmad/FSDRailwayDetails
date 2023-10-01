import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FareTable } from '../fare-table/FareTb';


@Injectable({
  providedIn: 'root'
})
export class FareTableService {

  constructor(private http : HttpClient) { }

  // getFareTableDetails(){
  //   return this.http.get<FareTable[]>('/api/controller')
  // }

  
}
