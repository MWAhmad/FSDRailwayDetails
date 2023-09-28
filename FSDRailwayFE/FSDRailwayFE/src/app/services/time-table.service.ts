import { Inject, Injectable } from '@angular/core';
import { appServiceConfig } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig';

@Injectable({
  providedIn: 'root'
})
export class TimeTableService {

  constructor(@Inject(appServiceConfig) private config : AppConfig) { }
}
