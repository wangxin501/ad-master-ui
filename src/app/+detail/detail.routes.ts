import { DetailComponent } from './detail.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', children: [
    { path: '', component: DetailComponent },
    { path: 'child-detail', loadChildren: './+child-detail#ChildDetailModule' }
  ]},
];
