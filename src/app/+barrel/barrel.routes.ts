import { BarrelComponent } from './barrel.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', children: [
    { path: '', component: BarrelComponent },
    { path: 'child-barrel', loadChildren: './+child-barrel#ChildBarrelModule' }
  ]},
];
