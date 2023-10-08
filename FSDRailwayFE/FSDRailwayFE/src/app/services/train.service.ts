import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Train } from "../interfaces/trainDetails"
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {
  baseApiAddress = environment.apiEndpoint

  getExpressDetails$ = this.Http.get<Train[]>(this.baseApiAddress + '/api/FSDRailway').pipe(
    shareReplay(1)
  )

  constructor(private Http: HttpClient) { }

  // getExpressDetails(){
  //   return this.Http.get<ExpressTable[]>('/api/FSDRailway');
  // }

  // getExpressDetails() : Observable<Train[]>{
  //   return this.Http.get<Train[]>(this.baseApiAddress + '/api/FSDRailway')
  // }
}
