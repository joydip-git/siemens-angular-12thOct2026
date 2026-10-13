import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/root/app';
import { ApplicationRef } from '@angular/core';

const p: Promise<ApplicationRef> = bootstrapApplication(App, appConfig)
p
  .then((ref: ApplicationRef) => console.log(ref.components[0].instance))
  .catch((err) => console.error(err));
