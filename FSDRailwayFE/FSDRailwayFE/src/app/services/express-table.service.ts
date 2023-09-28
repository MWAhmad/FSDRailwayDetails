import { Injectable, inject } from '@angular/core';
import { App_Config, appServiceConfig } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig';
import { Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ExpressTable } from '../express-table/ExpTable';

@Injectable({
  providedIn: 'root'
})
export class ExpressTableService {

  constructor(@Inject(appServiceConfig) private config: AppConfig,
              private Http: HttpClient) { }

  getExpressDetails(){
    return this.Http.get<ExpressTable[]>('/api/controller');
  }
}
