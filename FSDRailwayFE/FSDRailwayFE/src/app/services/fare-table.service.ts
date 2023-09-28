import { Injectable, Inject } from '@angular/core';
import { appServiceConfig } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig';

@Injectable({
  providedIn: 'root'
})
export class FareTableService {

  constructor(@Inject(appServiceConfig) private config: AppConfig) { }

  
}
