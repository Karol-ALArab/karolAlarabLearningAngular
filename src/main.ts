import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {Routes} from '@angular/router';
import {EquipmentList} from './app/equipment-list/equipment-list';

export const routes: Routes = [
  { path: '', redirectTo: '/equipment', pathMatch: 'full' },
  { path: 'equipment', component: EquipmentList },
];


bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
