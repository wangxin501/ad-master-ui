import {
  ApplicationRef,
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  PreloadAllModules,
  RouterModule,
} from '@angular/router';
import {
  createInputTransfer,
  createNewHosts,
  removeNgStyles,
} from '@angularclass/hmr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
 * Platform and Environment providers/directives/pipes
 */
import { AboutComponent } from './about';
import { AppComponent } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { ROUTES } from './app.routes';
import { AppState, InternalStateType } from './app.service';
import { ENV_PROVIDERS } from './environment';
// App is our top level component
import { HomeComponent } from './home';
import { XLargeDirective } from './home/x-large';
import { NoContentComponent } from './no-content';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Provider } from '@angular/core';

import { APIS } from '../../src-codegen';
import '../styles/headings.css';
import '../styles/styles.scss';

// Application wide providers
const APP_PROVIDERS: any = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  APIS
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    XLargeDirective
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) { }

  public hmrOnInit(store: StoreType): void {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    /**
     * Set state
     */
    this.appState._state = store.state;
    /**
     * Set input values
     */
    if ('restoreInputValues' in store) {
      let restoreInputValues: () => void = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType): void {
    const cmpLocation: any[] = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    /**
     * Save state
     */
    const state: InternalStateType = this.appState._state;
    store.state = state;
    /**
     * Recreate root elements
     */
    store.disposeOldHosts = createNewHosts(cmpLocation);
    /**
     * Save input values
     */
    store.restoreInputValues = createInputTransfer();
    /**
     * Remove styles
     */
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType): void {
    /**
     * Display new elements
     */
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
