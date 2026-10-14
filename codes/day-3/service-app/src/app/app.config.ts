import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideApiPathProvider, provideDataServiceClassProvider, provideDataServiceFactoryProvider, provideTodoService } from './config/constants';
import { provideHttpClient } from '@angular/common/http';
import { Repository } from './services/repository';
import { TodoRepositoryService } from './services/todo-repository-service';
//import { DataService } from './services/data-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideDataServiceClassProvider(),
    provideApiPathProvider(),
    provideTodoService()
    //provideHttpClient()
    //DataService
    //provideDataServiceFactoryProvider()
  ]
};
