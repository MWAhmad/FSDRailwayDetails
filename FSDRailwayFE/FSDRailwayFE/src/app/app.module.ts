import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { ExpressTableComponent } from './express-table/express-table.component';
import { FareTableComponent } from './fare-table/fare-table.component';
import { App_Config, appServiceConfig } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeTableComponent,
    ExpressTableComponent,
    FareTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: appServiceConfig,
      useValue: App_Config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
