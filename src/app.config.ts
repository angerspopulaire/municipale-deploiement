import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

export const appConfig: ApplicationConfig = {
  providers: [importProvidersFrom(AppModule)]
};