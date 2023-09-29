import { Component, OnInit } from '@angular/core';
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
