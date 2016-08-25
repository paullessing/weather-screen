import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
