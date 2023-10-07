import { Component, OnInit } from '@angular/core';
import { Train } from '../interfaces/trainDetails';
import { TrainService } from '../services/train.service';

@Component({
  selector: 'FSDR-fare-table',
  templateUrl: './fare-table.component.html',
  styleUrls: ['./fare-table.component.css']
})
export class FareTableComponent implements OnInit {
  Expresses: Train[] = []

  constructor(private trainService:TrainService){}

  ngOnInit(): void {
    this.trainService.getExpressDetails().subscribe(data =>
      this.Expresses = data)
  }
}
