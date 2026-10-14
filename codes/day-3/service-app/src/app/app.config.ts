import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideApiPathProvider, provideDataServiceClassProvider, provideDataServiceFactoryProvider } from './config/constants';
//import { DataService } from './services/data-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideDataServiceClassProvider(),
    provideApiPathProvider()
    //DataService
    //provideDataServiceFactoryProvider()
  ]
};
