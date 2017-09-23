import { ChildBarrelComponent } from './child-barrel.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ChildBarrelComponent,  pathMatch: 'full' },
];
