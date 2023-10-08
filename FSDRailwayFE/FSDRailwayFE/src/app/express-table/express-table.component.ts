import { Component, OnInit } from '@angular/core';
import { TrainService } from '../services/train.service';
import { Train } from '../interfaces/trainDetails';

@Component({
  selector: 'FSDR-express-table',
  templateUrl: './express-table.component.html',
  styleUrls: ['./express-table.component.css']
})
export class ExpressTableComponent implements OnInit {
  Expresses : Train[] = []

  constructor(private trainService: TrainService){}

  ngOnInit(): void {

  this.trainService.getExpressDetails$.subscribe(data =>
    this.Expresses = data)

  }
}
