import { Component, OnInit } from '@angular/core';
import { ExpressTableService } from '../services/express-table.service';
import { ExpressName, ExpressTable } from './ExpTable';

@Component({
  selector: 'FSDR-express-table',
  templateUrl: './express-table.component.html',
  styleUrls: ['./express-table.component.css']
})
export class ExpressTableComponent implements OnInit {
  ExpressTableData: ExpressTable[] = []

  ExpressNames : ExpressName[] = []

  constructor(private exptableService: ExpressTableService){}

  ngOnInit(): void {
  //   this.exptableService.getExpressDetails().subscribe(data => 
  //   this.ExpressTableData = data)
  // 

  this.exptableService.getExpressNames().subscribe(data =>
    this.ExpressNames = data)

  }
}
