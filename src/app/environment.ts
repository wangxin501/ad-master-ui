/**
 * Angular 2
 */
import {
  ApplicationRef,
  ComponentRef,
  enableProdMode,
  Provider,
} from '@angular/core';
import {
  disableDebugTools,
  enableDebugTools
} from '@angular/platform-browser';

/**
 * Environment Providers
 */
let PROVIDERS: Provider[] = [
  /**
   * Common env directives
   */
];

/**
 * Angular debug tools in the dev console
 * https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
 */
let _decorateModuleRef: any = <T>(value: T): T => { return value; };

if ('production' === ENV) {
  enableProdMode();

  /**
   * Production
   */
  _decorateModuleRef = (modRef: any) => {
    disableDebugTools();

    return modRef;
  };

  PROVIDERS = [
    ...PROVIDERS,
    /**
     * Custom providers in production.
     */
  ];

} else {

  _decorateModuleRef = (modRef: any) => {
    const appRef: ApplicationRef = modRef.injector.get(ApplicationRef);
    const cmpRef: ComponentRef<any> = appRef.components[0];

    enableDebugTools(cmpRef);

    return modRef;
  };

  /**
   * Development
   */
  PROVIDERS = [
    ...PROVIDERS,
    /**
     * Custom providers in development.
     */
  ];

}

export const decorateModuleRef: any = _decorateModuleRef;

export const ENV_PROVIDERS: Provider = [
  ...PROVIDERS
];
