import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';

//import { AppModule } from './app/app.module';
import { APP_ROUTES } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(APP_ROUTES)]
  /* another way of use of standalone component */
  //providers: [importProvidersFrom(AppModule)]
});

/* without standalone component */
// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch(err => console.error(err));
