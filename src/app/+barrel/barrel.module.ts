import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './barrel.routes';
import { BarrelComponent } from './barrel.component';
import { Routes } from '@angular/router';

console.log('`Barrel` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    BarrelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class BarrelModule {
  public static routes: Routes = routes;
}
