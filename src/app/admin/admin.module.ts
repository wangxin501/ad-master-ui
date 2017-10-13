import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateFeedComponent } from './create-feed/create-feed.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';

console.log('`Admin` bundle loaded asynchronously');

@NgModule({
  declarations: [
    /**
     * Components / Directives/ Pipes
     */
    AdminComponent,
    CreateAccountComponent,
    CreateFeedComponent,
    CreatePublisherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class AdminModule {
  public static routes: Routes = routes;
}
