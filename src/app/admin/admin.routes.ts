import { AdminComponent } from './admin.component';
import { Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreatePublisherComponent } from './create-publisher/create-publisher.component';
import { CreateFeedComponent } from './create-feed/create-feed.component';

export const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: CreateAccountComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'create-publisher', component: CreatePublisherComponent },
    { path: 'create-feed', component: CreateFeedComponent }
  ]}
];
