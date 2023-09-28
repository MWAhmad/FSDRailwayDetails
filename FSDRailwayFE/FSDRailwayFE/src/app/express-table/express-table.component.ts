import { Component, OnInit } from '@angular/core';
import { FareTable } from '../fare-table/FareTb';
import { FareTableService } from '../services/fare-table.service';
import { ExpressTableService } from '../services/express-table.service';
import { ExpressTable } from './ExpTable';

@Component({
  selector: 'FSDR-express-table',
  templateUrl: './express-table.component.html',
  styleUrls: ['./express-table.component.css']
})
export class ExpressTableComponent implements OnInit {
  ExpressTableData: ExpressTable[] = []

  constructor(private exptableService: ExpressTableService){}

  ngOnInit(): void {
    this.exptableService.getExpressDetails().subscribe(data => 
    this.ExpressTableData = data)
  }
}
