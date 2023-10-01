import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { TimeTable } from '../time-table/time-table';


@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  constructor(private http: HttpClient) { }

  // getTimeTableDetails(){
  //   return this.http.get<TimeTable[]>('/api/controller')
  // }
}
