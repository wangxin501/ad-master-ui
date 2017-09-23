import { ChildDetailComponent } from './child-detail.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: ChildDetailComponent,  pathMatch: 'full' },
];
