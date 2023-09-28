import { Component, OnInit } from '@angular/core';
import { TimeTable } from './time-table';

@Component({
  selector: 'FSDR-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  trainsTimetable!: TimeTable;

  ngOnInit(): void {
    
  }
}
