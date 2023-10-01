import { Component, OnInit } from '@angular/core';
import { FareTable } from './FareTb';
import { FareTableService } from '../services/fare-table.service';

@Component({
  selector: 'FSDR-fare-table',
  templateUrl: './fare-table.component.html',
  styleUrls: ['./fare-table.component.css']
})
export class FareTableComponent implements OnInit {
  FareTableData!: FareTable[];

  constructor(private fareService: FareTableService){}

  ngOnInit(): void {
    // this.fareService.getFareTableDetails().subscribe(data =>
    //   this.FareTableData = data)
  }
}
