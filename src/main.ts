import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { routes } from './app/app.routes';

bootstrapApplication(HomeComponent, {
  providers: [importProvidersFrom(RouterModule.forRoot(routes))],
});
