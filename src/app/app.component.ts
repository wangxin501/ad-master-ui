/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Dashboard</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" [routerLink]=" ['./'] "
                routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                Index <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]=" ['./home'] "
                routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]=" ['./detail'] "
                routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                Detail
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]=" ['./barrel'] "
                routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                Barrel
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]=" ['./about'] "
                routerLinkActive="active" [routerLinkActiveOptions]= "{exact: true}">
                About
              </a>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
  
      <div class="container-fluid">
        <div class="row">
          <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="#">Overview <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Reports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Analytics</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Export</a>
              </li>
            </ul>
  
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">Nav item</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nav item again</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">One more nav</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Another nav item</a>
              </li>
            </ul>
  
            <ul class="nav nav-pills flex-column">
              <li class="nav-item">
                <a class="nav-link" href="#">Nav item again</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">One more nav</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Another nav item</a>
              </li>
            </ul>
          </nav>
  
          <main class="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
            <h1>Dashboard</h1>

            <router-outlet></router-outlet>
        
            <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
        
            <footer>
              <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
              <div>
                <a [href]="url">
                  <img [src]="angularclassLogo" width="25%">
                </a>
              </div>
            </footer>
  
            
          </main>
        </div>
      </div>
  `
})
export class AppComponent implements OnInit {
  public angularclassLogo: string = 'assets/img/angularclass-avatar.png';
  public name: string = 'Angular 2 Webpack Starter';
  public url: string = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit(): void {
    console.log('Initial App State', this.appState.state);
  }

}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
