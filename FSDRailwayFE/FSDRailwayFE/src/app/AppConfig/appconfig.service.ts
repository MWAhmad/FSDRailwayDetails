import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig";
import { environment } from "src/environments/environment";

export const appServiceConfig = new InjectionToken<AppConfig>('appConfig');

export const App_Config: AppConfig = {
    apiEndPoint: environment.apiEndpoint
}