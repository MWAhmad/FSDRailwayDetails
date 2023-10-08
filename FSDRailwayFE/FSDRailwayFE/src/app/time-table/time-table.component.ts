import { Component, OnInit } from '@angular/core';
import { Train } from '../interfaces/trainDetails';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'FSDR-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  Expresses : Train[] = []

  constructor(private trainService: TrainService){}

  ngOnInit(): void {
    this.trainService.getExpressDetails$.subscribe(data =>
      this.Expresses = data)
  }
}
