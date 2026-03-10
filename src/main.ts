import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router';

import { EquipmentList } from './app/equipment-list/equipment-list';
import { PageNotFound } from './app/page-not-found/page-not-found';
import { ModifyListItem } from './app/modify-list-item/modify-list-item';
import { InMemoryDataService } from './app/services/in-memory-data';
import {provideHttpClient} from '@angular/common/http';

export const routes: Routes = [
  { path: '', redirectTo: '/equipment', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentList },
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/:id', component: ModifyListItem },
  { path: '**', component: PageNotFound }
];

bootstrapApplication(App, {
  providers: [
    provideHttpClient(), // Ensure that HTTP interceptors are properly configured
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 0 })) // Import providers dynamically
  ],
}).catch((err) => console.error(err));
