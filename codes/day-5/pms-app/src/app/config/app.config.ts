import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from '../routes/app.routes';
import { provideProductService } from './service-providers';
import { HttpFeature, HttpFeatureKind, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptor } from '../modules/shared/interceptors/token-interceptor';

const httpWithInterceptots: HttpFeature<HttpFeatureKind.Interceptors> = withInterceptors([TokenInterceptor])

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideProductService(),
    provideHttpClient(httpWithInterceptots)
  ]
};
