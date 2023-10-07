import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { ExpressTableComponent } from './express-table/express-table.component';
import { FareTableComponent } from './fare-table/fare-table.component';
import { App_Config, appServiceConfig } from './AppConfig/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimeTableComponent,
    ExpressTableComponent,
    FareTableComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
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
