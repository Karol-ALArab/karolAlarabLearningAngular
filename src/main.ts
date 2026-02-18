import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from '@angular/router'
import {EquipmentList} from './app/equipment-list/equipment-list';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {ModifyListItem} from './app/modify-list-item/modify-list-item';

export const routes: Routes = [
  { path: '', redirectTo: '/equipment', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentList },
  { path: 'modify', component: ModifyListItem },
  { path: 'modify/:id', component: ModifyListItem },
  { path: '**', component: PageNotFound }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));



