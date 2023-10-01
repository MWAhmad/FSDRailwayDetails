import { Component, OnInit } from '@angular/core';
import { TimeTable } from './time-table';
import { TimeTableService } from '../services/time-table.service';

@Component({
  selector: 'FSDR-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  TimeTableData!: TimeTable[];

  constructor(private timeTableService: TimeTableService){}

  ngOnInit(): void {
    this.timeTableService.getTimeTableDetails().subscribe(data =>
      this.TimeTableData = data)
  }
}
